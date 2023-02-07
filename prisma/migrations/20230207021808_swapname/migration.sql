/*
  Warnings:

  - You are about to drop the `imagemavatar` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `imagemavatar`;

-- CreateTable
CREATE TABLE `imagemAvatar` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `Avatar` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- RenameIndex
ALTER TABLE `user` RENAME INDEX `User_email_key` TO `user_email_key`;

-- RenameIndex
ALTER TABLE `user` RENAME INDEX `User_idCliente_key` TO `user_idCliente_key`;
