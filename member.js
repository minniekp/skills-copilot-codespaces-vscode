function skillsMember()
{
    this.name = "Skills";
    this.level = 1;
    this.experience = 0;
    this.maxExperience = 83;
    this.rank = 0;
    this.rankIcon = "bronze";
    this.icon = "skills";
    this.achievements = [];
    this.achievements.push(new achievementMember("Novice", "Achieve level 10 in any skill", 10, "skills", "bronze"));
    this.achievements.push(new achievementMember("Intermediate", "Achieve level 50 in any skill", 50, "skills", "silver"));
    this.achievements.push(new achievementMember("Advanced", "Achieve level 90 in any skill", 90, "skills", "gold"));
    this.achievements.push(new achievementMember("Master", "Achieve level 99 in any skill", 99, "skills", "platinum"));
    this.achievements.push(new achievementMember("Completionist", "Achieve level 120 in any skill", 120, "skills", "diamond"));
}