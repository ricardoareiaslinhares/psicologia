"use client";
import React, { useEffect, useState } from "react";
import Form from "../contact/Form";
import { Button } from "../ui/button";
import MapGoogle from "../maps/MapGoogle";
import Info from "../info/Info";
import { Separator } from "../ui/separator";
import TogetherAction from "../actionCall/Together";
import dynamic from "next/dynamic";
import text from "@/data/text.json";
import { Locale } from "@/i18n/config";

import Loading from "../videoPlayer/Loading";

const Player = dynamic(() => import("../videoPlayer/Player"), {
  ssr: false,
  loading: () => <Loading />,
});

type Props = {
  locale: Locale;
};

const Footer = ({ locale }: Props) => {
  const t = text[locale] || text.pt;
  const [buttonShow, setButtonShow] = useState<number>(2);
  const [containerHeight, setContainerHeight] = useState(260);

  useEffect(() => {
    if (buttonShow === 1) {
      setContainerHeight(370);
    } else if (buttonShow === 2) {
      setContainerHeight(260);
    } else {
      setContainerHeight(470);
    }
  }, [buttonShow]);

  return (
    <div className="w-full flex flex-1 flex-col sm:h-[520px]">
      <div className="flex flex-1 flex-col lg:flex-row justify-between gap-8 flex-wrap mt-4">
        <div className="flex flex-1 justify-center lg:justify-start w-auto flex-col px-4 sm:px-0">
          <h3 className="sm:text-left text-center text-2xl font-bold mb-20 underline">
            {t.footer.closedNotice}
          </h3>
          <h4 className="text-base font-bold mb-3 px-2 sm:px-0 italic">{t.footer.leaveMessage}</h4>
          <Form locale={locale} />
        </div>
        <div className="mt-6 flex md:hidden w-4/5 self-center">
          <Separator className="bg-foreground/10" />
        </div>
        <div className="flex items-center self-center justify-center flex-1 flex-row flex-wrap xl:flex-nowrap gap-4 w-full">
          <div className="sm:pl-2 items-center flex md:basis-3/4 sm:pb-0 pb-4">
            <div
              className="flex items-center"
              style={{
                height: `${containerHeight}px`,
                transition: "height 0.3s ease-in-out",
              }}
            >
              {buttonShow === 1 ? (
                <MapGoogle />
              ) : buttonShow === 2 ? (
                <Player
                  playing={false}
                  url={"https://www.youtube.com/watch?v=14QkzMWrEqE&t=4s"}
                />
              ) : (
                <Info />
              )}
            </div>
          </div>
          <div className="flex flex-1 md:basis-1/4 justify-center">
            <div className="flex flex-col md:flex-row xl:flex-col gap-4 justify-center items-center"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
