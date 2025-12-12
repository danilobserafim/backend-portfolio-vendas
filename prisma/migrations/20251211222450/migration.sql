/*
  Warnings:

  - You are about to drop the column `tipoProjeto` on the `budgets` table. All the data in the column will be lost.
  - You are about to drop the `proposal` table. If the table is not empty, all the data it contains will be lost.
  - Made the column `typeId` on table `budgets` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `budgets` DROP FOREIGN KEY `budgets_typeId_fkey`;

-- DropIndex
DROP INDEX `budgets_typeId_fkey` ON `budgets`;

-- AlterTable
ALTER TABLE `budgets` DROP COLUMN `tipoProjeto`,
    MODIFY `typeId` VARCHAR(191) NOT NULL;

-- DropTable
DROP TABLE `proposal`;

-- AddForeignKey
ALTER TABLE `budgets` ADD CONSTRAINT `budgets_typeId_fkey` FOREIGN KEY (`typeId`) REFERENCES `projectTypes`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
