const { sequelize, Phone } = require("./models");

(async function () {
  //
  //   try {
  //     const smoePhones = {
  //       model: "Sony",
  //       brand: "Somony",
  //       year_of_prod: "2020-01-01",
  //       ram: 8,
  //       cpu: "Exenox",
  //       screen_diagonal: "1'26''",
  //       have_nfc: true,
  //     };
  //     //Executing (default): INSERT INTO "Phones" ("id","model","brand","year_of_prod","ram","cpu","screen_diagonal","have_nfc","createdAt","updatedAt") VALUES (DEFAULT,$1,$2,$3,$4,$5,$6,$7,$8,$9) RETURNING "id","model","brand","year_of_prod","ram","cpu","screen_diagonal","have_nfc","createdAt","updatedAt";
  //     const createPhone = await Phone.create(smoePhones);
  //     console.log(createPhone);
  //   } catch (err) {
  //     console.log(err);
  //   }
  //
  //
  //отримання списку телефонів
  //
  //   try {
  //     //Executing (default): SELECT "id", "model", "brand", "year_of_prod", "ram", "cpu", "screen_diagonal", "have_nfc", "createdAt", "updatedAt" FROM "Phones" AS "Phone";
  //     const getPhones = await Phone.findAll({ raw: true });
  //     console.log(getPhones);
  //   } catch (error) {
  //     console.log(error);
  //   }
  //
  //оновлення: змінити розмір оперативної пам'яті телефону з id: 1
  //
  //   try {
  //     //Executing (default): UPDATE "Phones" SET "ram"=$1,"updatedAt"=$2 WHERE "id" = $3
  //     const updatePhonebyId = await Phone.update(
  //       { ram: 12 },
  //       { where: { id: 1 }, raw: true }
  //     );
  //     console.log(updatePhonebyId);
  //   } catch (error) {
  //     console.log(error);
  //   }
  //
  //
  //видалення телефону з id: 2
  //
  //   try {
  //     // Executing (default): DELETE FROM "Phones" WHERE "id" = 1
  //     const deletePhone = await Phone.destroy({ where: { id: 1 } });
  //     console.log(deletePhone);
  //   } catch (error) {
  //     console.log(error);
  //   }
})();
