import Image from "next/image";
import globals from "../styles/Global.module.css";
import BrookingsLogo from "../public/brookings-logo.svg";
import IdmeLogo from "../public/idme-logo.svg";
import DomainToolsLogo from "../public/domaintools-logo.svg";
import TenUpLogo from "../public/10up-logo.svg";
import TealLogo from "../public/tm-logo.svg";

export default function ClientLogos(props) {
    return (
        <>
            <div class="container">
                <h2 class="text-center">I've worked with:</h2>
                <div class="logos flex gap-[60px] mt-[50px] justify-center flex-wrap *:max-w-[300px] *:w-[auto] *:h-[65px] *:object-contain *:object-center *:fill-white">
                    <BrookingsLogo />
                    <TenUpLogo />
                    <IdmeLogo />
                    <DomainToolsLogo />
                    <TealLogo />
                    <img src="/Punch-Logo-Red@2x.webp" />
                    <img src="/mifw-logo.png" />
                </div>
            </div>
        </>
    );
}
