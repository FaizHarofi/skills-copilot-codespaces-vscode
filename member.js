function skillsMember() {
  return {
    name: "skillsMember",
    description: "Returns the member of a skill",
    execute: function (skill) {
      return skill.member;
    },
  };
}
