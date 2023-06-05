import { useContext } from "react";
import { useGetUser } from "../../api/user/getUser";
import { UserContext } from "../../context/userContext";

import { Card, LoadingOverlay } from "@mantine/core";

import KeyVal from "../common/KeyVal";

import { GiMuscleUp } from "react-icons/gi";

const UserHeader = () => {
  const userContext = useContext(UserContext);

  const user = useGetUser(userContext?.userId);

  const BMI =
    user.data?.height && user.data?.weight
      ? (user.data?.weight / Math.pow(user.data?.height / 100, 2))
          .toFixed(1)
          .toString()
      : "-";

  return (
    <>
      <LoadingOverlay visible={user.isFetching} />
      <div className="w-full my-4">
        <Card shadow="lg" radius="md">
          <div className="flex lg:py-20">
            <div className="w-1/3 p-4">
              <div className="flex text-xl font-semibold">
                <GiMuscleUp /> {user.data?.username}{" "}
              </div>
              <div className="font-light ">{BMI}BMI</div>
            </div>
            <div className="flex gap-3 w-2/3">
              <KeyVal
                label="Wzrost:"
                value={
                  user.data?.height ? user.data?.height.toString() + "cm" : "-"
                }
              />
              <KeyVal
                label="Waga:"
                value={
                  user.data?.weight ? user.data?.weight.toString() + "kg" : "-"
                }
              />
            </div>
          </div>
        </Card>
      </div>
    </>
  );
};

export default UserHeader;
