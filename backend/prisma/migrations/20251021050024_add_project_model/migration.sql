/*
  Warnings:

  - Added the required column `projectId` to the `Evaluation` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `evaluation` ADD COLUMN `projectId` INTEGER NOT NULL,
    ADD COLUMN `projectScore` DOUBLE NULL,
    ADD COLUMN `summary` VARCHAR(191) NULL,
    MODIFY `matchScore` DOUBLE NULL,
    MODIFY `suggestion` VARCHAR(191) NULL;

-- CreateTable
CREATE TABLE `Project` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `filename` VARCHAR(191) NOT NULL,
    `originalName` VARCHAR(191) NOT NULL,
    `textContent` VARCHAR(191) NULL,
    `vectorId` VARCHAR(191) NULL,
    `userId` INTEGER NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Project` ADD CONSTRAINT `Project_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Evaluation` ADD CONSTRAINT `Evaluation_projectId_fkey` FOREIGN KEY (`projectId`) REFERENCES `Project`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
