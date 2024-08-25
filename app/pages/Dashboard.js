"use client";
import Background from "../components/Background";
import Image from 'next/image';
import Model3D from "../components/Model3D";
import Toolbar from "../components/toolbar";
import ActionDes from "../components/ActionDes";

export default function Dashboard() {
  return (
    <div>
      <Toolbar/>
      <Background />
      <Model3D />
      <ActionDes />
    </div>
  );
}
