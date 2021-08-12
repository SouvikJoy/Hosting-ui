<template>
  <div class="index">
    <div class="index-content">
      <div class="index-content-left">
        <div class="heading">
          Superior Cloud Server & Hosting in One Platform
        </div>
        <div class="sub-heading">
          Reliable website hosting, 99.9% uptime guarantee, free SSL certificate, easy WordPress installs & 24 hours support.
        </div>
        <button class="started-button">
          Get Started
        </button>
      </div>
      <div class="index-content-right">
        <img src="~/assets/index-content-right.png" alt="">
      </div>
    </div>

    <div class="index-search">
      <div class="content-heading">
        Looking For Domain Name?
      </div>
      <div class="sub-heading">
        Get up to 40% disount! till Jun 30
      </div>
      <form class="search-form">
        <input type="text" class="search-box" placeholder="Search">
        <button class="search-button">
          Search
        </button>
      </form>
      <div class="domain">
        <div v-for="(domain, index) in domains" :key="index" class="domain-content">
          <div class="domain-extension">
            {{ domain.extension }}
          </div>
          <div class="domain-offered-price">
            {{ '$' + domain.price }}
          </div>
          <div class="domain-price">
            {{ '$' + domain.price }}
          </div>
        </div>
      </div>
    </div>

    <div class="pricing">
      <div class="pricings-content">
        <div class="content-heading">
          Our Flexible Pricing Plans
        </div>
        <div class="sub-heading">
          Professional hosting at an affordable price. Distinctively
          recaptiualize principle-centered core competencies through client-centered
          core competencies.
        </div>
        <div class="pricing-box-content">
          <div v-for="(pricingPlan, index) in pricingPlans" :key="index" class="pricing-box">
            <div class="pricing-image">
              <img :src="pricingPlan.image" alt="" class="pricing-box-image">
            </div>
            <div class="pricing-heading">
              {{ pricingPlan.name }}
            </div>
            <div class="pricings-price">
              {{ '$' + pricingPlan.price }}
              <span class="per-month">
                /mo
              </span>
            </div>
            <div class="pricings-offer">
              {{ pricingPlan.offPerMonth + '%' }} off -
              <span class="offered-per-month">
                $1.89 /mo
              </span>
            </div>
            <div class="pricings-per-year font-bold">
              {{ '$' + pricingPlan.firstYearPrice }}
              <span class="first-year">
                /1st year
              </span>
            </div>
            <div class="facilities">
              <ul class="facility-list">
                <li class="facility-list-item">
                  <span class="font-bold">
                    {{ pricingPlan.storageSize }}
                  </span>
                  {{ pricingPlan.storageType }} Storage
                </li>
                <li class="facility-list-item">
                  <span class="font-bold">
                    {{ pricingPlan.websites }}
                  </span> Websites
                </li>
                <li class="facility-list-item">
                  <span class="font-bold">
                    {{ pricingPlan.visitorsPerMonth }}
                  </span> visitor
                  <span class="per-month">
                    /mo
                  </span>
                </li>
                <li class="facility-list-item">
                  <span class="font-bold">
                    {{ pricingPlan.SSL }}
                  </span> SSL
                </li>
                <li class="facility-list-item">
                  <span class="font-bold">
                    {{ pricingPlan.CDN }}
                  </span> CDN
                </li>
                <li class="facility-list-item">
                  <span class="font-bold">
                    {{ pricingPlan.backup }}
                  </span> Backup
                </li>
              </ul>
            </div>
            <div>
              <button class="card-button">
                Order Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="callout">
      <div class="callout-content">
        <div class="callout-content-left">
          <img src="~/assets/index-content-right.png" alt="">
        </div>
        <div class="callout-content-right">
          <div class="content-heading">
            Best Cloud Hosting
            With Trusted Service
          </div>
          <div class="callout-sub-heading">
            Thousands of small and medium-sized
            enterprises are powered by iDataHost cloud servers worldwide.
            For everything between major IaaS projects and deployments,
            iDataHost is designed to help you make progress.
            Get the 99.9% uptime SLA you deserve with the best price and
            performance on the market.
          </div>
        </div>
      </div>
    </div>

    <div class="services">
      <div class="content-heading">
        What makes us best among the other <br> hosting companies
      </div>
      <div class="sub-heading">
        We believe that we are the best web hosting provider because we provide
        high quality hosting services, cPanel and other panel. We have experience support
        staff's who is ready to help you for 24 hours.
        You can choose the hosting plan of your choice at a very cheap price.
      </div>
      <div class="services-content">
        <div v-for="(service, index) in services" :key="index" class="service-box">
          <div class="service-image">
            <img :src="service.image" alt="">
          </div>
          <div class="service-heading">
            {{ service.name }}
          </div>
          <div class="service-desc">
            {{ service.description }}
          </div>
        </div>
      </div>
    </div>

    <div class="tools">
      <div class="content-heading">
        Our Tools & Services Helping To <br> Optimize Your Website
      </div>
      <div class="sub-heading">
        We believe that we are the best web hosting provider because we provide
        high quality hosting services, cPanel and other panel. We have experience support
        staff's who is ready to help you for 24 hours.
        You can choose the hosting plan of your choice at a very cheap price.
      </div>
      <div class="tools-content">
        <div v-for="(tool, index) in tools" :key="index" class="tool-box">
          <div class="tools-top">
            <div class="tools-top-left">
              <div class="service-policy">
                {{ tool.policy }}
              </div>
              <div class="service-heading">
                {{ tool.name }}
              </div>
            </div>
            <div class="service-image">
              <img :src="tool.image" alt="">
            </div>
          </div>
          <div class="service-desc">
            {{ tool.description }}
          </div>
        </div>
      </div>
    </div>

    <div class="index-content">
      <div class="index-content-right">
        <img src="~/assets/services.png" alt="" :style="{ width: '250px' }">
      </div>
      <div class="index-content-left">
        <div class="heading">
          Best Cloud Hosting And No Hidden Cost
        </div>
        <div class="sub-heading">
          Reliable website hosting, 99.9% uptime guarantee, free SSL certificate, easy WordPress installs & 24 hours support.
        </div>
        <button class="started-button">
          Learn More
        </button>
      </div>
    </div>

    <div class="index-content">
      <div class="index-content-left">
        <div class="heading">
          All facilities manage from a single platform
        </div>
        <div class="sub-heading">
          Reliable website hosting, 99.9% uptime guarantee, free SSL certificate, easy WordPress installs & 24 hours support.
        </div>
        <button class="started-button">
          Learn More
        </button>
      </div>
      <div class="index-content-right">
        <img src="~/assets/websitespng.png" alt="" :style="{ width: '250px' }">
      </div>
    </div>

    <div class="callout">
      <div class="callout-content">
        <div class="callout-content-right">
          <div class="support-heading">
            24/7 Customer Support over Tickets/Phone/Email/Chat
          </div>
          <div class="callout-sub-heading">
            Our experts are always here to give answers and advice to you to set up and enlarge your online store.
            Experts are available 24 hours a day, 7 days a week, to assist you. Open a ticket or call over the phone.
            performance on the market.
          </div>
        </div>
        <div class="callout-content-left">
          <img src="~/assets/call-center-support.svg" alt="">
        </div>
      </div>
    </div>

    <div class="client">
      <div class="content-heading">
        A Glimpse of Our Valuable Clients
      </div>
      <div class="sub-heading">
        A Glimpse of our valuable clients takes a look at our clients at a glance.
        They are our reliable consumers & we are their loyal hosting provider. We are working hand in hand with each other.
      </div>
      <div class="client-content">
        <div v-for="(item, index) in 6" :key="index">
          <img
            src="~/assets/pricing-2.png"
            alt=""
            in
            6
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script src="~/app/classes/page/welcome.js"></script>

<style lang="scss">

</style>
