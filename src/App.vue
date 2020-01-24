<template>
  <div id="app" class="container">
    <article class="container-item" v-for="(item, index) in data" :key="index">
      <h2 class="title">
        <a :href="item.href" target="_blank" rel="noopener noreferrer">
          {{ item.title }}
        </a>
      </h2>
      <p class="summary">{{ item.summary }}</p>
    </article>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'App',
  data() {
    return {
      data: [
        {
          title: 'https://onewheel.com/',
          summary: 'The obvious one for OEM accessories, but there it is',
          href: 'https://onewheel.com/'
        },
        {
          title: 'https://float-supply.com',
          summary: 'Float plates, etc.',
          href: 'https://float-supply.com'
        },
        {
          title: 'https://www.flightfins.com',
          summary: 'Fins, tires, etc.',
          href: 'https://www.flightfins.com'
        },
        {
          title: 'https://craftandride.com',
          summary: 'everything',
          href: 'https://craftandride.com'
        },
        {
          title: 'https://groovyruvy.bigcartel.com',
          summary: 'Various OneWheel stands',
          href: 'https://groovyruvy.bigcartel.com'
        },
        {
          title: 'https://land-surf.com',
          summary: 'fangs, charge & ride, etc.',
          href: 'https://land-surf.com'
        },
        {
          title: 'https://www.prorideusa.com',
          summary: 'traction pads',
          href: 'https://www.prorideusa.com'
        },
        {
          title: 'https://eight2ten.com',
          summary: 'Funky Rail Guards, grip tape, skid plates, custom one offs',
          href: 'https://eight2ten.com'
        },
        {
          title: 'https://1wheelparts.com',
          summary: 'Funky skid plates and rail guards',
          href: 'https://1wheelparts.com'
        },
        {
          title: 'http://flexfender.com',
          summary: 'Quick Fender removal kits',
          href: 'http://flexfender.com'
        },
        {
          title: 'https://www.kiilguards.com',
          summary: 'Metal skid plates',
          href: 'https://www.kiilguards.com'
        },
        {
          title: '',
          summary: 'Instagram: NJcustom carbon custom fenders',
          href: ''
        },
        {
          title: 'http://float365.club',
          summary: 'custom rail wraps + reflective rails',
          href: 'http://float365.club'
        },
        {
          title: 'https://www.elitecustomsow.com',
          summary: 'reflective rails + aluminum plates, etc.',
          href: 'https://www.elitecustomsow.com'
        },
        {
          title: 'https://www.synergywiz.com/glider',
          summary: 'bumper + wheelie to drag',
          href: 'https://www.synergywiz.com/glider'
        },
        {
          title: '',
          summary:
            'Amazon: XLR female Noise Reducing Caps - PTFE (Teflon) Insulation - Nickel Plated - Pack of 2',
          href: ''
        },
        {
          title: 'https://www.badgerwheel.com',
          summary:
            'extra water protection + snow traction cover + bearing cover, etc.',
          href: 'https://www.badgerwheel.com'
        },
        {
          title: 'https://armor-dilloz.com',
          summary: 'Make your tyre puncture proof',
          href: 'https://armor-dilloz.com'
        },
        {
          title: 'https://eliteinnovationsllc.com',
          summary: 'Recon rails + flight fin extenders',
          href: 'https://eliteinnovationsllc.com'
        },
        {
          title: 'https://owarmor.com',
          summary: 'cobra pads + OWArmor + sidewinders, etc.',
          href: 'https://owarmor.com'
        },
        {
          title: 'https://www.fishbones.life',
          summary: 'frontpad concave add-on',
          href: 'https://www.fishbones.life'
        },
        {
          title: '',
          summary:
            'Electricbigfoot (Instagram) front concave pad that layers above sensor.',
          href: ''
        },
        {
          title: 'https://carvepower.com',
          summary: 'battery + collabs (kush pad)',
          href: 'https://carvepower.com'
        },
        {
          title: 'http://gofullsend.com',
          summary: 'FF extender blocks + Go full send system',
          href: 'http://gofullsend.com'
        },
        {
          title: 'https://two-x.com',
          summary: 'OW battery extension modification.',
          href: 'https://two-x.com'
        },
        {
          title: 'https://sonnywheels.com',
          summary: 'VnR battery kits, silver OneWheel charms',
          href: 'https://sonnywheels.com'
        },
        {
          title: 'https://carbon-smith.com',
          summary:
            'Front wheel detachable handles, wheels, bumpers with handles and wheels. Pint stuff too',
          href: 'https://carbon-smith.com'
        },
        {
          title: 'https://ruckus-rails.myshopify.com/collections/all',
          summary: 'Silver Custom Rails',
          href: 'https://ruckus-rails.myshopify.com/collections/all'
        },
        {
          title: 'https://buckwilders.com',
          summary: 'Tires + extras',
          href: 'https://buckwilders.com'
        },
        {
          title: 'https://plugbrush.com',
          summary: 'multipurpose power cover',
          href: 'https://plugbrush.com'
        },
        {
          title: 'https://www.etsy.com/shop/Teece3D…',
          summary: 'power plugs and 3D Printing',
          href: 'https://www.etsy.com/shop/Teece3D…'
        },
        {
          title: 'https://www.facebook.com/christopher.lopez.39948',
          summary: 'Very cool and cheap low profile carrying handle',
          href: 'https://www.facebook.com/christopher.lopez.39948'
        },
        {
          title: 'https://fluxskinz.com',
          summary: 'Stickers, funky rail wraps, T-shirts',
          href: 'https://fluxskinz.com'
        },
        {
          title: 'https://onewheel.threadless.com',
          summary: 'Float T-shirts',
          href: 'https://onewheel.threadless.com'
        },
        {
          title: 'https://www.redbubble.com/people/onewheelartist',
          summary: 'OneWheel artist',
          href: 'https://www.redbubble.com/people/onewheelartist'
        },
        {
          title: 'https://shreddlabs.com',
          summary:
            'Additional links and comprehensive information about everything you could ever do to your board',
          href: 'https://shreddlabs.com'
        },
        {
          title: 'http://leehweno.com',
          summary: 'jokes',
          href: 'http://leehweno.com'
        },
        {
          title: '',
          summary:
            'Lastly, Ryan Witz HureWitz (search the name on Facebook) for all OEM replacement parts. Also brand new XR’s for $1,675.',
          href: ''
        }
      ]
    };
  }
});
</script>
