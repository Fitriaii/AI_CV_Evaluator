/*
  Warnings:

  - You are about to drop the column `matchScore` on the `evaluation` table. All the data in the column will be lost.
  - You are about to drop the column `projectScore` on the `evaluation` table. All the data in the column will be lost.
  - You are about to drop the column `strengths` on the `evaluation` table. All the data in the column will be lost.
  - You are about to drop the column `suggestion` on the `evaluation` table. All the data in the column will be lost.
  - You are about to drop the column `summary` on the `evaluation` table. All the data in the column will be lost.
  - You are about to drop the column `weaknesses` on the `evaluation` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `evaluation` DROP COLUMN `matchScore`,
    DROP COLUMN `projectScore`,
    DROP COLUMN `strengths`,
    DROP COLUMN `suggestion`,
    DROP COLUMN `summary`,
    DROP COLUMN `weaknesses`,
    ADD COLUMN `cv_feedback` VARCHAR(191) NULL,
    ADD COLUMN `cv_match_rate` DOUBLE NULL,
    ADD COLUMN `overall_summary` VARCHAR(191) NULL,
    ADD COLUMN `project_feedback` VARCHAR(191) NULL,
    ADD COLUMN `project_score` DOUBLE NULL;
