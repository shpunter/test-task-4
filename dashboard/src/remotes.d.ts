declare module "@originjs/vite-plugin-federation";

declare module "remoteApp/Render" {
  import { FC } from "react";

  const Render: FC<{ item: TImage | TText | TVideo }>;
  export default Render;

  type TImage = { id: number; type: "image"; url: string };

  type TText = {
    id: number;
    type: "text";
    headline: string;
    description: string;
  };

  type TVideo = { id: number; type: "video"; url: string };
}
