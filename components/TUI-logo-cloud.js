import BrookingsLogo from "../public/brookings-logo.svg";
import IdmeLogo from "../public/idme-logo.svg";
import DomainToolsLogo from "../public/domaintools-logo.svg";
import TenUpLogo from "../public/10up-logo.svg";
import TealLogo from "../public/tm-logo.svg";

export default function LogoCloud() {
    return (
        <div className="bg-[#0d0d0d] py-[40px]">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <h2 className="text-center text-lg font-semibold leading-8 text-white">
                    Trusted by the world’s most innovative teams
                </h2>
                <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
                    <img
                        className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                        src="/brookings-logo.svg"
                        alt="Transistor"
                        width={158}
                        height={48}
                    />
                    <img
                        className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
                        src="/10up-logo.svg"
                        alt="SavvyCal"
                        width={158}
                        height={48}
                    />
                    <img
                        className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                        src="/idme-logo.svg"
                        alt="Reform"
                        width={158}
                        height={48}
                    />
                    <img
                        className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                        src="/domaintools-logo.svg"
                        alt="Tuple"
                        width={158}
                        height={48}
                    />

                    <img
                        className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
                        src="/tm-logo.svg"
                        alt="Statamic"
                        width={158}
                        height={48}
                    />
                </div>
            </div>
        </div>
    );
}
