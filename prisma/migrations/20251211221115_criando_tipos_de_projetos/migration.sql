-- AlterTable
ALTER TABLE `budgets` ADD COLUMN `typeId` VARCHAR(191) NULL;

-- CreateTable
CREATE TABLE `projectTypes` (
    `id` VARCHAR(191) NOT NULL,
    `value` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `proposal` (
    `id` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `budgets` ADD CONSTRAINT `budgets_typeId_fkey` FOREIGN KEY (`typeId`) REFERENCES `projectTypes`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
