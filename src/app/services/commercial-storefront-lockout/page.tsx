import {
  ServiceLandingPage,
  buildServiceMetadata,
} from "@/components/ServiceLandingPage";
import { getService } from "@/lib/services";

const config = getService("commercial-storefront-lockout");
export const metadata = buildServiceMetadata(config);
export default function ServicePage() {
  return <ServiceLandingPage config={config} />;
}
