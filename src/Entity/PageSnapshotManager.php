<?php
/**
 * This file is part of the Networking package.
 *
 * (c) net working AG <info@networking.ch>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Networking\InitCmsBundle\Entity;

use Doctrine\Persistence\ObjectManager;
use Doctrine\ORM\EntityRepository;
use Doctrine\ORM\NonUniqueResultException;
use Doctrine\ORM\NoResultException;
use Networking\InitCmsBundle\Model\PageSnapshotManagerInterface;

/**
 * Class PageSnapshotManager.
 *
 * @author Yorkie Chadwick <y.chadwick@networking.ch>
 */
class PageSnapshotManager extends EntityRepository implements PageSnapshotManagerInterface
{
    /**
     * PageSnapshotManager constructor.
     * @param ObjectManager $om
     * @param $class
     */
    public function __construct(ObjectManager $om, $class)
    {
        $classMetaData = $om->getClassMetadata($class);

        parent::__construct($om, $classMetaData);
    }

    /**
     * @param $pageId
     *
     * @return mixed
     */
    public function findSnapshotByPageId($pageId)
    {
        $qb = $this->createQueryBuilder('ps')
            ->where('ps.page = :pageId')
            ->orderBy('ps.version', 'desc')
            ->setParameter(':pageId', $pageId);

        return $qb->getQuery()->execute();
    }

    /**
     * @param $pageId
     *
     * @return mixed
     */
    public function findLastPageSnapshot($pageId)
    {
        $qb = $this->createQueryBuilder('ps')
            ->where('ps.page = :pageId')
            ->orderBy('ps.version', 'desc')
            ->setMaxResults(1)
            ->setParameter(':pageId', $pageId);

        try {
            return $qb->getQuery()->getSingleResult();
        } catch (NoResultException $e) {
            return null;
        } catch (NonUniqueResultException $e) {
            return null;
        }
    }
}
