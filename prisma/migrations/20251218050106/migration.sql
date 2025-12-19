/*
  Warnings:

  - You are about to drop the column `status` on the `budgets` table. All the data in the column will be lost.
  - Added the required column `statusId` to the `budgets` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `budgets` DROP COLUMN `status`,
    ADD COLUMN `statusId` VARCHAR(191) NOT NULL;

-- CreateTable
CREATE TABLE `budgetStatus` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `budgets` ADD CONSTRAINT `budgets_statusId_fkey` FOREIGN KEY (`statusId`) REFERENCES `budgetStatus`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
