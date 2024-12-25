"use client";

import Loading from "@/components/elements/Loading/Loading";
import BankInfo from "@/components/modules/ProfilePage/BankInfo";
import PersonalInfo from "@/components/modules/ProfilePage/PersonalInfo";
import UserAccount from "@/components/modules/ProfilePage/UserAccount";

import { useGetProfile } from "@/services/queries";

function ProfilePage() {
  const { isPending, data } = useGetProfile();

  if (isPending || !data) {
    return (
      <div className="flex min-h-[200px] items-center justify-center">
        <Loading />
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-[20px] pt-[20px] lg:pt-0">
      <UserAccount data={data.data} />
      <PersonalInfo data={data.data} />
      <BankInfo data={data.data} />
    </div>
  );
}

export default ProfilePage;
