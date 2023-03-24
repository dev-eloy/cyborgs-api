CREATE DATABASE IF NOT EXISTS cyborgs_api;

USE cyborgs_api;

CREATE TABLE IF NOT EXISTS cyborgs (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  location VARCHAR(255) NOT NULL,
  weapon VARCHAR(255) NOT NULL,
  special_power VARCHAR(255) NOT NULL,
  strengths VARCHAR(255) NOT NULL,
  weaknesses VARCHAR(255) NOT NULL,
  image VARCHAR(255) NOT NULL,
  PRIMARY KEY (id)
);

INSERT INTO cyborgs (name, location, weapon, special_power, strengths, weaknesses, image)
VALUES ("Nexus-8", "Los Angeles", "Plasma-Blaster", "Hacking", "Enhanced strength and agility", "Vulnerability to electromagnetic pulses", "https://i.imgur.com/4rAKXkh.png"),
("Cyborg X", "New York", "Laser-Sword", "Invisibility", "Superhuman speed", "Limited energy supply", "https://i.imgur.com/JbPVCeK.png"),
("Bionic Woman", "London", "Ionic Blaster", "Telekinesis", "Psychic abilities", "Susceptibility to malware attacks", "https://i.imgur.com/gCM2Qrf.png"),
("Specter", "London", "Plasma Blades", "Phasing", "Invisibility", "Energy consumption", "https://i.imgur.com/mj12eRn.png"),
("Terra-9", "Sydney", "Earthquake Hammer", "Geokinesis", "Control over earth and rock", "Dependence on a solid surface", "https://i.imgur.com/nPH6geZ.png"),
("Crimson", "Paris", "Plasma Rifle", "Pyrokinesis", "Resistance to high temperatures", "Vulnerability to water", "https://i.imgur.com/7buoYon.png"),
("Zenith", "Dubai", "Plasma Cannon", "Energy Manipulation", "Ability to absorb and redirect energy", "Limited energy storage capacity", "https://i.imgur.com/fNu5y60.png"),
("Silver Fang", "Moscow", "Silver Blades", "Enhanced Senses", "Superhuman senses", "Silver allergies", "https://i.imgur.com/wz8inrx.png"),
("Neon Knight", "Las Vegas", "Neon Blades", "Light Manipulation", "Control over light and shadows", "Limited energy reserves", "https://i.imgur.com/egpbJG1.png"),
("Chaos", "Mumbai", "Chaos Blades", "Reality Warping", "Ability to manipulate reality", "Limited control over powers", "https://i.imgur.com/qrARTGX.png"),
("Omega-9", "Hong Kong", "Omega Cannon", "Gravity Manipulationg", "Control over gravity", "Limited energy reserves", "https://i.imgur.com/zL5R03O.png"),
("Blaze", "Rio de Janeiro", "Flame Thrower", "Pyrokinesis", "Resistance to high temperatures", "Vulnerability to water", "https://i.imgur.com/pAZrVOV.png"),
("Stormchaser", "Seattle", "Storm Hammer", "Aerokinesis", "Control over wind and air", "Limited control over powers", "https://i.imgur.com/aEIEH3X.png"),
("Titanium", "Berlin", "Titanium Blades", "Superhuman Strength", "Resistance to physical attacks", "Limited mobility", "https://i.imgur.com/IuH1igM.png"),
("Nebula", "Paris", "Nebula Blaster", "Teleportation", "Ability to teleport short distances", "Limited range of teleportation", "https://i.imgur.com/daHurZl.png");