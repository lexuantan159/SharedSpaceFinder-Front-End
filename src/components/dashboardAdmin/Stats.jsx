import React from "react";

// components

import CardStats from "../cardStats/CartStats";

export default function HeaderStats({ data, ...props }) {
  return (
    <>
      {/* Header */}
      <div className="bg-lightBlue-600 md:pt-15 relative pb-12 pt-12">
        <div className="mx-auto w-full px-4 md:px-10">
          <div>
            {/* Card stats */}
            <div className="flex flex-wrap">
              <div className="w-full px-4 lg:w-6/12 xl:w-3/12">
                <CardStats
                  statSubtitle="Number of Admin account"
                  statTitle={data.NumberAdminAccount}
                  statArrow="up"
                  statPercent=""
                  statPercentColor="text-emerald-500"
                  statDescripiron=""
                  statIconName="far fa-chart-bar"
                  statIconColor="bg-red-500"
                />
              </div>
              <div className="w-full px-4 lg:w-6/12 xl:w-3/12">
                <CardStats
                  statSubtitle="Number of User account"
                  statTitle={data.NumberUserAccount}
                  statArrow="down"
                  statPercent=""
                  statPercentColor="text-red-500"
                  statDescripiron=""
                  statIconName="fas fa-chart-pie"
                  statIconColor="bg-orange-500"
                />
              </div>
              <div className="w-full px-4 lg:w-6/12 xl:w-3/12">
                <CardStats
                  statSubtitle="Number of Owner account"
                  statTitle={data.NumberOwnerAccount}
                  statArrow="down"
                  statPercent=""
                  statPercentColor="text-orange-500"
                  statDescripiron=""
                  statIconName="fas fa-users"
                  statIconColor="bg-pink-500"
                />
              </div>
              <div className="w-full px-4 lg:w-6/12 xl:w-3/12">
                <CardStats
                  statSubtitle="Number of Post space"
                  statTitle={
                    data.NumberPostSpaceHadRent +
                    data.NumberPostSpaceNotRent +
                    data.NumberPostSharingSpace +
                    data.NumberPostSpaceRejected
                  }
                  statArrow="up"
                  statPercent=""
                  statPercentColor="text-emerald-500"
                  statDescripiron=""
                  statIconName="fas fa-percent"
                  statIconColor="bg-blue-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
