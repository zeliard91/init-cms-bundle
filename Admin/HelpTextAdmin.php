<?php
/**
 * This file is part of the Networking package.
 *
 * (c) net working AG <info@networking.ch>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
namespace Networking\InitCmsBundle\Admin;

use Networking\InitCmsBundle\Admin\BaseAdmin;
use Sonata\AdminBundle\Datagrid\ListMapper;
use Sonata\AdminBundle\Datagrid\DatagridMapper;
use Sonata\AdminBundle\Validator\ErrorElement;
use Sonata\AdminBundle\Form\FormMapper;

class HelpTextAdmin extends BaseAdmin
{
    /**
     * @param \Sonata\AdminBundle\Datagrid\ListMapper $listMapper
     */
    protected function configureListFields(ListMapper $listMapper)
    {

        $listMapper
            ->addIdentifier('title')
            ->addIdentifier('translationKey')
            ->add('locale')
            ->add(
            '_action',
            'actions',
            array(
                'label' => ' ',
                'actions' => array(
                    'edit' => array(),
                    'delete' => array()
                )
            )
        );
    }

    /**
     * @param \Sonata\AdminBundle\Form\FormMapper $formMapper
     */
    protected function configureFormFields(FormMapper $formMapper)
    {
        try {
            $request = $this->getRequest();
        } catch (\RuntimeException $e) {
            $request = $this->container->get('request');
        }

        $locale = $request->get('locale') ? $request->get('locale') : $request->getLocale();

        $formMapper
            ->add(
            'locale',
            'choice',
            array(
                'choices' => $this->getLocaleChoices(),
                'preferred_choices' => array($locale)
            )
        )
            ->add('translationKey')
            ->add('title')
            ->add(
            'text',
            'textarea',
            array(
                'attr' => array(
                    'class' => 'tinymce',
                )
            )
        );

    }

    /**
     * @param \Sonata\AdminBundle\Datagrid\DatagridMapper $datagridMapper
     */
    protected function configureDatagridFilters(DatagridMapper $datagridMapper)
    {
        $datagridMapper
            ->add(
            'locale',
            'doctrine_orm_callback',
            array(
                'callback' => array(
                    $this,
                    'getByLocale'
                )
            ),
            'choice',
            array(
                'empty_value' => false,
                'choices' => $this->getLocaleChoices(),
                'preferred_choices' => array($this->getDefaultLocale())
            )

        );

    }

    /**
     * @param \Sonata\DoctrineORMAdminBundle\Datagrid\ProxyQuery $queryBuilder
     * @param $alias
     * @param $field
     * @param $data
     * @return bool
     */
    public function getByLocale($queryBuilder, $alias, $field, $data)
    {
        $active = true;
        if (!$locale = $data['value']) {
            $locale = $this->getDefaultLocale();
            $active = false;
        }
        $queryBuilder->andWhere(sprintf('%s.locale = :locale', $alias));
        $queryBuilder->orderBy(sprintf('%s.translationKey', $alias), 'asc');
        $queryBuilder->setParameter(':locale', $locale);

        return $active;
    }

}