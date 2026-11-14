import {
  ServiceLandingPage,
  buildServiceMetadata,
} from "@/components/ServiceLandingPage";
import { getService } from "@/lib/services";

const config = getService("car-lockout-arlington");
export const metadata = buildServiceMetadata(config);
export default function ServicePage() {
  return <ServiceLandingPage config={config} />;
}
