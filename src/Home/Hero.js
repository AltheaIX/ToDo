import { Button } from '../components/Button';
import { HeroTitle } from '../components/Hero';

export function Hero() {
  return (
    <div className="text-center py-9">
      <HeroTitle />
      <Button className="text-base mt-10">Learn More</Button>
    </div>
  );
}
