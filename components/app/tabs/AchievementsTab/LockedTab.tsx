import Image from "next/image";
import React from "react";

const fakeData = [
  {
    achievementName: "Rabbit",
    iconUrl: "/images/achievement_fake_images/rabbit.jpeg",
    description: "Complete training sequence.",
    percentage: 74.2
  },
  {
    achievementName: "Veteran",
    iconUrl: "/images/achievement_fake_images/veteran.jpeg",
    description: "Choose three primary weapons that use different ammo.",
    percentage: 74.2
  },
  {
    achievementName: "Clean Escape",
    iconUrl: "/images/achievement_fake_images/clean_escape.jpeg",
    description: "Escape the chasing Nazis on the REICH level without being caught once",
    percentage: 90.2
  },
  {
    achievementName: "Within a Hair of Death",
    iconUrl: "/images/achievement_fake_images/within_a_hair_of_death.jpeg",
    description: "Escape from the Red Line.",
    percentage: 67.3
  },
  {
    achievementName: "Engineer",
    iconUrl: "/images/achievement_fake_images/engineer.jpeg",
    description: "Use 10 Lever",
    percentage: 66.3
  },
  {
    achievementName: "Soldier",
    iconUrl: "/images/achievement_fake_images/soldier.jpeg",
    description: "Kill 100 Human Enimies.",
    percentage: 64.0
  }
]

export default function LockedTab() {
  return (
    <div>
      <div className="flex justify-between font-bold mt-4 mb-2">
        <span>Achievements</span>
      </div>

      <div className="flex flex-col gap-2">
        {fakeData.map((data, index) => (
          <div
            key={`locked-${data.achievementName}-${index}`}
            className="w-full px-1 py-4 flex items-center relative bg-[#2c2c30]"
          >
            <Image
              src={data.iconUrl}
              width={48}
              height={48}
              alt={data.achievementName}
              className="mr-3 z-10"
            />
            <div className="flex flex-col justify-center z-10">
              <p className="text-lg font-bold"> {data.achievementName} </p>
              <p className="text-md"> {data.description} </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}