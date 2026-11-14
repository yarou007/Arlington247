import {
  ServiceLandingPage,
  buildServiceMetadata,
} from "@/components/ServiceLandingPage";
import { getService } from "@/lib/services";

const config = getService("key-extraction-lock-repair");
export const metadata = buildServiceMetadata(config);
export default function ServicePage() {
  return <ServiceLandingPage config={config} />;
}
