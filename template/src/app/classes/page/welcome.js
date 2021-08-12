import { Component, mixins } from 'nuxt-property-decorator';
import NuxioPress from '~/app/classes/nuxiopress';

@Component({
  components: {

  },
  data: () => ({
    domains: [
      {
        name: 'Com',
        extension: '.com',
        price: '500'
      },
      {
        name: 'Net',
        extension: '.net',
        price: '400'
      },
      {
        name: 'Org',
        extension: '.org',
        price: '700'
      },
      {
        name: 'Xyz',
        extension: '.xyz',
        price: '100'
      },
      {
        name: 'Tech',
        extension: '.tech',
        price: '900'
      }
    ],
    pricingPlans: [
      {
        name: 'Web Hosting',
        price: 500,
        image: require('~/assets/pricing-1.png'),
        offPerMonth: 50,
        firstYearPrice: 500,
        storageSize: '10GB',
        storageType: 'SSD',
        websites: 3,
        visitorsPerMonth: '50k',
        SSL: 'Free',
        CDN: 'Free',
        backup: 'Auto'
      },
      {
        name: 'Shared Web Hosting',
        price: 800,
        image: require('~/assets/pricing-2.png'),
        offPerMonth: 20,
        firstYearPrice: 500,
        storageSize: '5GB',
        storageType: 'NVme',
        websites: 1,
        visitorsPerMonth: '30k',
        SSL: 'OnDemand',
        CDN: 'Free',
        backup: 'Auto'
      },
      {
        name: 'Java Hosting',
        price: 200,
        image: require('~/assets/pricing-3.png'),
        offPerMonth: 40,
        firstYearPrice: 500,
        storageSize: '20GB',
        storageType: 'NVme',
        websites: 2,
        visitorsPerMonth: '40k',
        SSL: 'Free',
        CDN: 'OnDemand',
        backup: 'Manual'
      }
    ],
    services: [
      {
        name: 'Fully Managed',
        image: require('~/assets/pricing-1.png'),
        description: 'Ensuring the best possible defense against the most dangerous network attacks. The web hosting management experts help to solve your problem and other facts that you need to get.'
      },
      {
        name: '24/7',
        image: require('~/assets/pricing-1.png'),
        description: 'Ensuring the best possible defense against the most dangerous network attacks. The web hosting management experts help to solve your problem and other facts that you need to get.'
      },
      {
        name: 'Secure Data',
        image: require('~/assets/pricing-1.png'),
        description: 'Ensuring the best possible defense against the most dangerous network attacks. The web hosting management experts help to solve your problem and other facts that you need to get.'
      }
    ],
    tools: [
      {
        name: 'Website Building',
        policy: 'EASY & FIRST',
        image: require('~/assets/pricing-1.png'),
        description: 'Ensuring the best possible defense against the most dangerous network attacks. The web hosting management experts help to solve your problem and other facts that you need to get.'
      },
      {
        name: 'Managed WordPress',
        policy: 'SUITABLE FOR ALL USERS',
        image: require('~/assets/pricing-1.png'),
        description: 'Ensuring the best possible defense against the most dangerous network attacks. The web hosting management experts help to solve your problem and other facts that you need to get.'
      },
      {
        name: 'Dedicated Support',
        policy: 'COMMITMENT TO',
        image: require('~/assets/pricing-1.png'),
        description: 'Ensuring the best possible defense against the most dangerous network attacks. The web hosting management experts help to solve your problem and other facts that you need to get.'
      },
      {
        name: 'Website Transfer',
        policy: 'EASY & SMOOTH',
        image: require('~/assets/pricing-1.png'),
        description: 'Ensuring the best possible defense against the most dangerous network attacks. The web hosting management experts help to solve your problem and other facts that you need to get.'
      }
    ]
  })
})
export default class Welcome extends mixins(NuxioPress) {

}
