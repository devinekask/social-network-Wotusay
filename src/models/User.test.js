import User from "./User";


test("Create a new user", () => {
  const user = new User({ name: "testuser" });
  expect(user.name).toBe("testuser");
});
