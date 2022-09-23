const { Activity, conn } = require("../../src/db");

describe("Genre Model", () => {
  before(() =>
    conn.authenticate().catch((err) => {
      console.error("Unable to connect to the database", err);
    })
  );
  describe("Validators", () => {
    beforeEach(() => Activity.sync({ force: true }));
    describe("name and id", () => {
      it("should throw an error if name is null", (done) => {
        Activity.create({})
          .then(() => done(new Error("It requires a valid name and a id")))
          .catch(() => done());
      });
      it("should work when its a valid name and id", () => {
        Activity.create({
          id: "1",
          name: "Argentina",
          season: "Verano",
          duration: "2 semanas",
        });
      });
    });
  });
});