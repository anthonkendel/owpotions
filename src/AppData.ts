export function sourceToTitle(source: string): string {
  const sourceCleaned = source
    .replace(/(http:\/\/|https:\/\/)/, '')
    .replace(/(www\.)/, '');
  const [title, rest] = sourceCleaned.split('.');
  return `${title.substr(0, 1).toUpperCase()}${title.substr(1).toLowerCase()}`;
}

export const appData = [
  {
    title:
      'Accessories for Onewheel – Onewheel Accessories by M-Tech Plastics LLC.',
    description: 'Onewheel Accessories by M-Tech Plastics LLC.',
    source: 'http://flexfender.com'
  },
  {
    title: 'Home Float365',
    description: 'We create amazing designs.',
    source: 'http://float365.club'
  },
  {
    title: 'SEND',
    description: '',
    source: 'http://gofullsend.com'
  },
  {
    title: 'Leehweno | Unreal OneWheel Accessories',
    description: 'Unreal OneWheel accessories.',
    source: 'http://leehweno.com'
  },
  {
    title:
      '1 Wheel Parts is your shop for all aftermarket Onewheel accessories – 1Wheel Parts',
    description:
      '1 Wheel Parts LLC is the leader in Onewheel protection. We are the inovators of the single peice Ignite rail guards and skid plates. All our skid plates and rail guards are made from polycarbonate AKA bullet proof glass. We have a Hypercharger in the works as well as a ton of other cool and innovative products!',
    source: 'https://1wheelparts.com'
  },
  {
    title: 'Armor-Dillo - Superior Tire Sealant – Armor-Dilloz',
    description:
      'Military grade tire sealant which offers superior protection from flat tires and punctures',
    source: 'https://armor-dilloz.com'
  },
  {
    title: 'Buckwilders - Onewheel, Accessories, Onewheel',
    description: 'The one stop for all your Onewheel accessories',
    source: 'https://buckwilders.com'
  },
  {
    title: 'CarbonSmith - 3D Printing, Carbon Fiber',
    description:
      'We offer Carbon Fiber 3D printing service reinforced with continuous Carbon Fiber, Kevlar, and HSHT Fiberglass. ',
    source: 'https://carbon-smith.com'
  },
  {
    title: 'CarvePower',
    description: '',
    source: 'https://carvepower.com'
  },
  {
    title: 'Craft&Ride | Accessories for Onewheel™',
    description:
      'Craft&Ride is the largest provider of aftermarket accessories for Onewheel with a selection of over 75 products including fenders, foot pads, handles, backpacks, Float Plates, Float Sidekicks, protection, grip tape, stands, and so much more.',
    source: 'https://craftandride.com'
  },
  {
    title: 'Onewheel Rail Guards',
    description:
      'EIGHT2TEN was the first to provide Rail Guards for the Onewheel Electronic boards in 2017.  Over the years we have perfected our guards from industrial strength plastic used in military environments.  Our material has proven to be durable and effective all while looking unique out on the streets.  We now offer full cus',
    source: 'https://eight2ten.com/collections/onewheel-rail-guards'
  },
  {
    title: 'Elite Innovations | Performance Onewheel Products',
    description:
      'Dedicated to providing the Onewheel community with trusted, feedback-driven, performance Onewheel products!',
    source: 'https://eliteinnovationsllc.com'
  },
  {
    title:
      'Onewheel Accessories | Float Plates | Stands | Shirts | Shop the Float Life',
    description:
      'The Float Life offers pro tested onewheel accessories. Find OneWheel skid plates ( Float Plates ), a OneWheel Stand ( The Foundation ), and more. Float On!',
    source: 'https://float-supply.com'
  },
  {
    title: 'Onewheel Accessories by Float Life Europe - Float Life Europe',
    description: '',
    source: 'https://floatlife-europe.com/'
  },
  {
    title: 'fluxskinz',
    description: 'fluxskinz',
    source: 'https://fluxskinz.com'
  },
  {
    title: "Groovy Ruvy's Store — Home",
    description:
      'Offering attractive, durable and affordable metal Onewheel stands for all Onewheel models!',
    source: 'https://groovyruvy.bigcartel.com'
  },
  {
    title: 'Land-Surf, LLC – The Best Quality Products for Onewheel™',
    description:
      'Land-Surf, LLC produces carefully designed products designed to enhance the safety, usability, and fun of Onewheel boards by Future Motion. High quality designs – tested tough!',
    source: 'https://land-surf.com'
  },
  {
    title: 'Onewheel // Future Motion',
    description:
      'Get ready to ride the best motorized skateboard when you buy a Onewheel today! Designed and made in California from the highest quality components.',
    source: 'https://onewheel.com/'
  },
  {
    title: 'Onewheel Artist Shop | Featuring custom t-shirts, prints, and more',
    description:
      'My Onewheel Shop offers Onehweel shirts, hoodies, jackets, prints, shower curtains, rugs, and more Onewheel goodness to stoke your Float.',
    source: 'https://onewheel.threadless.com'
  },
  {
    title: 'OWarmor.com - Onewheel Review, Triple Eight, Onewheel Protection',
    description:
      'Accessories for the Onewheel Electric skateboard and Safety Equipment for riding Electric Skateboards. electric board one wheel, Onewheel handle, Onewheel Protective plates , Protect your investment. Onewheel Review',
    source: 'https://owarmor.com'
  },
  {
    title: 'Plugbrush Onewheel accessory – Plug Brush',
    description:
      'The Plugbrush is a onewheel accessory that not only protects your charging port, it also gives you a killer brush and a place to store an allen wrench key.',
    source: 'https://plugbrush.com'
  },
  {
    title: 'Products – Summer Snow Outfitters',
    description: 'Summer Snow Outfitters',
    source: 'https://ruckus-rails.myshopify.com/collections/all'
  },
  {
    title: 'Ride On Experience / 1st Onewheel® Dealer in Europe since 2016 ✌️',
    description:
      'Onewheel was inspired by snowboard, surf and skate sensations. It offers a brand new riding experience accessible to all, with nature as a playground.',
    source: 'https://shop.rideonexperience.com/en'
  },
  {
    title: 'Shredd Labs – Your source for everything Onewheel',
    description: 'Your source for everything Onewheel',
    source: 'https://shreddlabs.com'
  },
  {
    title: 'Sonnywheels',
    description: 'Sonnywheels',
    source: 'https://sonnywheels.com'
  },
  {
    title: 'Two-X Upgrade Kit for Onewheel – Two-X LLC',
    description:
      'The premium performance upgrade for Onewheels. Slap the fully-integrated Two-X system onto your V1 or Plus board, and experience newfound levels of torque, stability and range, with reduced nosedive risk. Read the FAQ, join the forum, and ride safe!',
    source: 'https://two-x.com'
  },
  {
    title: 'Badger Wheel',
    description: 'Waterproofing Kit for Onewheel',
    source: 'https://www.badgerwheel.com'
  },
  {
    title: 'Electric Bigfoot',
    description: 'Concave grip and other products for OneWheel XR and Pint',
    source: 'https://www.electricbigfoot.com/'
  },
  {
    title: 'Elite Customs OW',
    description:
      'Custom Onewheel Gear Elite Rails Shred Plates Elite Stands Gnar Pack Merch \nMADE IN THE USA WORDWIDE SHIPPING',
    source: 'https://www.elitecustomsow.com'
  },
  {
    title: '3Dway on Etsy',
    description:
      'You searched for: 3Dway! Discover the unique items that 3Dway creates. At Etsy, we pride ourselves on our global community of sellers. Each Etsy seller helps contribute to a global marketplace of creative goods. By supporting 3Dway, you’re supporting a small business, and, in turn, Etsy!',
    source: 'https://www.etsy.com/ca/shop/3Dway'
  },
  {
    title: 'Teece3D on Etsy',
    description:
      'You searched for: Teece3D! Discover the unique items that Teece3D creates. At Etsy, we pride ourselves on our global community of sellers. Each Etsy seller helps contribute to a global marketplace of creative goods. By supporting Teece3D, you’re supporting a small business, and, in turn, Etsy!',
    source: 'https://www.etsy.com/shop/Teece3D'
  },
  {
    title: 'FISHBONES - Carve Harder, Ride Longer... – fishbones.life',
    description:
      'Front Range Float Designs, LLC, makers of the FISHBONES is proud to launch our online store and website for your viewing and ordering pleasure. We design solutions for all type of eboard, electric skateboards, and One Wheels for OneWheeling and OneWheeling... to enhance your ride experience.',
    source: 'https://www.fishbones.life'
  },
  {
    title: 'Shop - FlightFins',
    description:
      'Introducing the FullFlight with all of your favorite FF products rolled into a single set. Ships with V2 Fins\n\nAccommodates regular and goofy stances.\n\nYour order will include:\n\n \tOne set of V2 FlightFins\n \tOne set of FlightFenders\n \tOne FlightShield Pro\n \tMounting hardware\n \tInstruction manuals\n\nNot currently compatible with Surestance Pro or OneTail\n\nMade in the USA - Patent Pending',
    source: 'https://www.flightfins.com'
  },
  {
    title: 'KiiL Guards',
    description: '',
    source: 'https://www.kiilguards.com'
  },
  {
    title: 'Welcome to One Stop Board Shop - We Keep You Riding.',
    description: '',
    source: 'https://www.onestopboardshop.com/'
  },
  {
    title: 'PinkOak Onewheel Accessories | Custom Onewheel Sidekicks',
    description:
      'We are a European based manufacturer of custom onewheel accessories. Check out our ever growing variety sidekicks or challenge us to something more bespoke.',
    source: 'https://www.pinkoak.co.uk/'
  },
  {
    title: 'Onewheel Accessories | Custom Soft Tracion Pads | ProRide',
    description:
      'ProRide designs and develops custom Onewheel accessories. Soft surf style traction pads for the Onewheel+ and Onewheel+XR.',
    source: 'https://www.prorideusa.com'
  },
  {
    title: 'onewheelartist | Redbubble',
    description: 'Northern California Artist inspired by the Onewheel.',
    source: 'https://www.redbubble.com/people/onewheelartist'
  },
  {
    title: 'Glider — SynergyWiz',
    description: '',
    source: 'https://www.synergywiz.com/glider'
  }
];
