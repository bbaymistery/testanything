import Script from "next/script";
import React from "react";
import styles from "./styles.module.scss";
const UiView = () => {
  return (
    <div className={styles.uiView}>
      <div className={styles.container}>
        <div className={styles.features}>
          <div className={styles.feature_box}>
            <div className={styles.thumb}>
              <header className={styles.thumb_header}>
                <i className={`fa-solid fa-thumbs-up ${styles.thumb_icon}`}></i>
              </header>

              <div className={styles.thumb_caption}>
                <h5 className={styles.thumb_title}>
                  <a className={styles.thumb_title_text}>
                    Airport meet and greet
                  </a>
                </h5>
                <p className={styles.thumb_desc}>Airport meet and greet</p>
              </div>
            </div>
            <div className={styles.thumb}>
              <header className={styles.thumb_header}>
                <i className={`fa-solid fa-briefcase ${styles.thumb_icon}`}></i>
              </header>
              <div className={styles.thumb_caption}>
                <h5 className={styles.thumb_title}>
                  <a className={styles.thumb_title_text}>Free waiting time</a>
                </h5>
                <p className={styles.thumb_desc}>
                  No charge in case <br /> of flight delays
                </p>
              </div>
            </div>
            <div className={styles.thumb}>
              <header className={styles.thumb_header}>
                <i
                  style={{ transform: "rotate(40deg)" }}
                  className={`fa-solid fa-plane-up ${styles.thumb_icon}`}
                ></i>
              </header>
              <div className={styles.thumb_caption}>
                <h5 className={styles.thumb_title}>
                  <a className={styles.thumb_title_text}>Flight tracking</a>
                </h5>
                <p className={styles.thumb_desc}>Flight tracking</p>
              </div>
            </div>
          </div>
        </div>

        {/* main content  */}
        {/* {(
          <>
            <div id="ReviewsWidget"></div>

            <Script
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
            (function () {
        new ReviewsWidget('#ReviewsWidget', {
//Your REVIEWS.io Store ID and widget type:
store: 'london-heathrow-taxi',
widget: 'polaris',

//Content settings (store_review,product_review,third_party_review,questions). Choose what to display in this widget:
options: {
    types: 'store_review',
    lang: 'en',
    //Possible layout options: bordered, large and reverse.
    layout: '',
    //How many reviews & questions to show per page?
    per_page: 3,
    store_review:{
      hide_if_no_results: false,
    },
    third_party_review:{
      hide_if_no_results: false,
    },
    //Product specific settings. Provide product SKU for which reviews should be displayed:
    product_review:{
        //Display product reviews - include multiple product SKUs seperated by Semi-Colons (Main Indentifer in your product catalog )
        sku: '[Multiple SKUs Seperated by Semi-Colons e.g "sku1;sku2;" ]',
        hide_if_no_results: false,
    },
    //Questions settings:
    questions:{
        hide_if_no_results: false,
        enable_ask_question: true,
        show_dates: true,
        //Display group questions by providing a grouping variable, new questions will be assigned to this group.
        grouping:'[Group questions by providing a grouping variable here or a specific product SKU]'
    },
    //Header settings:
    header:{
        enable_summary: true, //Show overall rating & review count
        enable_ratings: true,
        enable_attributes: true,
        enable_image_gallery: true, //Show photo & video gallery
        enable_percent_recommended: false, //Show what percentage of reviewers recommend it
        enable_write_review: true, //Show "Write Review" button
        enable_ask_question: true, //Show "Ask Question" button
        enable_sub_header: true, //Show subheader
        rating_decimal_places: 2,
    },

    //Filtering settings:
    filtering:{
        enable: true, //Show filtering options
        enable_text_search: true, //Show search field
        enable_sorting: true, //Show sorting options (most recent, most popular)
        enable_product_filter: false, //Show product options filter
        enable_media_filter: true, //Show reviews with images/video/media options
        enable_overall_rating_filter: true, //Show overall rating breakdown filter
        enable_language_filter: false, // Filter by review language
        enable_language_filter_language_change: false, // Update widget language based on language selected
        enable_ratings_filters: true, //Show product attributes filter
        enable_attributes_filters: true, //Show author attributes filter
    },

    //Review settings:
    reviews:{
        enable_avatar: false, //Show author avatar
        enable_reviewer_name:  true, //Show author name
        enable_reviewer_address:  true, //Show author location
        reviewer_address_format: 'city, country', //Author location display format
        enable_verified_badge: true, //Show "Verified Customer" badge
        review_content_filter: 'undefined', //Filter content
        enable_reviewer_recommends: true, //Show "I recommend it" badge
        enable_attributes: true, //Show author attributes
        enable_product_name: true, //Show display product name
        enable_review_title: undefined, //Show review title
        enable_replies: undefined, //Show review replies
        enable_images: true, //Show display review photos
        enable_ratings: true, //Show product attributes (additional ratings)
        enable_share: true, //Show share buttons
        enable_helpful_vote: true, //Show "was this helpful?" section
        enable_helpful_display: true, //Show how many times times review upvoted
        enable_report: true, //Show report button
        enable_date: true, //Show when review was published
        enable_third_party_source: true, // Show third party source


    },
},
//Translation settings
translations: {
    'Verified Customer': 'Verified Customer'
},
//Style settings:
styles: {
    //Base font size is a reference size for all text elements. When base value gets changed, all TextHeading and TexBody elements get proportionally adjusted.
    '--base-font-size': '16px',

    //Button styles (shared between buttons):
    '--common-button-font-family': 'inherit',
    '--common-button-font-size':'16px',
    '--common-button-font-weight':'500',
    '--common-button-letter-spacing':'0',
    '--common-button-text-transform':'none',
    '--common-button-vertical-padding':'10px',
    '--common-button-horizontal-padding':'20px',
    '--common-button-border-width':'2px',
    '--common-button-border-radius':'0px',

    //Primary button styles:
    '--primary-button-bg-color': '#0E1311',
    '--primary-button-border-color': '#0E1311',
    '--primary-button-text-color': '#ffffff',

    //Secondary button styles:
    '--secondary-button-bg-color': 'transparent',
    '--secondary-button-border-color': '#0E1311',
    '--secondary-button-text-color': '#0E1311',

    //Star styles:
    '--common-star-color': '#ffa534',
    '--common-star-disabled-color': 'rgba(0,0,0,0.25)',
    '--medium-star-size': '22px',
    '--small-star-size': '19px',

    //Heading styles:
    '--heading-text-color': '#0E1311',
    '--heading-text-font-weight': '600',
    '--heading-text-font-family': 'inherit',
    '--heading-text-line-height': '1.4',
    '--heading-text-letter-spacing': '0',
    '--heading-text-transform': 'none',

    //Body text styles:
    '--body-text-color': '#0E1311',
    '--body-text-font-weight': '400',
    '--body-text-font-family': 'inherit',
    '--body-text-line-height': '1.4',
    '--body-text-letter-spacing': '0',
    '--body-text-transform': 'none',

    //Input field styles:
    '--inputfield-text-font-family': 'inherit',
    '--input-text-font-size': '14px',
    '--inputfield-text-font-weight': '400',
    '--inputfield-text-color': '#0E1311',
    '--inputfield-border-color': 'rgba(0,0,0,0.2)',
    '--inputfield-background-color': 'transparent',
    '--inputfield-border-width': '1px',
    '--inputfield-border-radius': '0px',

    '--common-border-color': 'rgba(0,0,0,0.15)',
    '--common-border-width': '1px',
    '--common-sidebar-width': '190px',

    //Slider indicator (for attributes) styles:
    '--slider-indicator-bg-color': 'rgba(0,0,0,0.1)',
    '--slider-indicator-button-color': '#0E1311',
    '--slider-indicator-width': '190px',

    //Badge styles:
    '--badge-icon-color': '#0E1311',
    '--badge-icon-font-size': 'inherit',
    '--badge-text-color': '#0E1311',
    '--badge-text-font-size': 'inherit',
    '--badge-text-letter-spacing': 'inherit',
    '--badge-text-transform': 'inherit',

    //Author styles:
    '--author-font-size': 'inherit',
    '--author-text-transform': 'none',

    //Author avatar styles:
    '--avatar-thumbnail-size': '60px',
    '--avatar-thumbnail-border-radius': '100px',
    '--avatar-thumbnail-text-color': '#0E1311',
    '--avatar-thumbnail-bg-color': 'rgba(0,0,0,0.1)',

    //Product photo or review photo styles:
    '--photo-video-thumbnail-size': '80px',
    '--photo-video-thumbnail-border-radius': '0px',

    //Media (photo & video) slider styles:
    '--mediaslider-scroll-button-icon-color': '#0E1311',
    '--mediaslider-scroll-button-bg-color': 'rgba(255, 255, 255, 0.85)',
    '--mediaslider-overlay-text-color': '#ffffff',
    '--mediaslider-overlay-bg-color': 'rgba(0, 0, 0, 0.8))',
    '--mediaslider-item-size': '110px',

    //Pagination & tabs styles (normal):
    '--pagination-tab-text-color': '#0E1311',
    '--pagination-tab-text-transform': 'none',
    '--pagination-tab-text-letter-spacing': '0',
    '--pagination-tab-text-font-size': '16px',
    '--pagination-tab-text-font-weight': '600',

    //Pagination & tabs styles (active):
    '--pagination-tab-active-text-color': '#0E1311',
    '--pagination-tab-active-text-font-weight': '600',
    '--pagination-tab-active-border-color': '#0E1311',
    '--pagination-tab-border-width': '3px',
},
});
            })();

  `,
              }}
            />
          </>
        )} */}
        <div className={styles.main_content}>
          <p>
            <strong>
              <em>London Heathrow Taxi</em>
            </strong>
            <strong>
              <em>
                &nbsp;specializes in transfers between central London and all
                terminals at London&nbsp;
              </em>
            </strong>
            <strong>
              <em>Heathrow Airport. It&nbsp;</em>
            </strong>
            <strong>
              <em>
                is an affordable and reliable mode of transport to the airport,
                with&nbsp;London Heathrow Taxi&nbsp;
              </em>
            </strong>
            <strong>
              <em>offering inclusive fares and no hidden charges.</em>
            </strong>
          </p>
          <p>
            <strong>Traveling to/from&nbsp;</strong>
            <strong>Heathrow Airport? The transfer fare&nbsp;</strong>
            <strong>is cheaper than you might imagine.&nbsp;</strong>
            <strong>Heathrow taxis&nbsp;</strong>
            <strong>
              are also more reliable than public transport, more often than not.
            </strong>
          </p>
          <p>
            Each year, more than 70 million passengers pass through Heathrow
            Airport, making it the busiest international airport in the UK and
            the third busiest in the world, after Beijing and Atlanta.
          </p>
          <p>
            <br />
            {/*  */}
            {/*  */}
            There are five main terminals at &nbsp;Heathrow. Our transfer fares
            &nbsp; from Central London are starting from £60.00, regardless of
            which terminal you are departing from. Meanwhile, transfer from
            Heathrow Airport to Central London &nbsp;(again, from any terminal)
            are charged at £65.00. All&nbsp; Heathrow transfer prices are
            inclusive.
          </p>
          <p>
            <br /> If you are looking for a&nbsp;cheap Heathrow Airport transfer
            quote, look no further. All our fares include 30 minutes’ waiting
            time, airport meet and greet, parking, tolls, and taxes, as
            standard. Furthermore, if you happen to be traveling with small
            children, child seats are provided at no extra cost. Our
            all-inclusive&nbsp;Heathrow transfer prices&nbsp;come with no
            unexpected surprises or hidden extras. <br /> Heathrow Car Service's
            office is located just outside the airport’s perimeter, making us
            the closest minicab company to the airport itself: we’re just two
            minutes from Terminal 2; 3 minutes from Terminal 4; and 10 minutes
            from Terminal 5. This is just one of the reasons Heathrow Car
            Service is able to provide such cheap&nbsp;fares to/from Heathrow
            Airport.
          </p>
          <p>
            <br /> Our fleet comprises saloon, MPV, and 8-seaters,
            ensuring&nbsp;Heathrow Car Service has the perfect vehicle to suit
            your party’s needs, whatever its size. In addition, we offer a
            Business Class service using Mercedes E and S Class cars.
          </p>
          <p>
            <br /> Traveling between terminals at&nbsp;Heathrow Airport? Minicab
            is an alternative to the often-crowded terminal shuttle trains. It’s
            also a great option for passengers with small children or
            walking/mobility issues. An altogether more civilized way to
            navigate your way around the airport,&nbsp;Heathrow Car
            Service’s&nbsp;inter-terminal transfers cost just £18. Please
            contact us for further information.
          </p>
          <p>
            <br /> One of the big worries when traveling with infants or small
            children is whether you’ll even be able to take a minicab&nbsp;to
            Heathrow Airport, without lugging along your own car
            seat.&nbsp;Heathrow Car Service is one of the few minicab companies
            to offer complimentary, age-appropriate baby/child seats for your
            journey with us at no additional cost. To avail of this service, you
            will need to pre-book your Heathrow private car and advise of the
            age(s) of your child(ren).
          </p>
          <p>
            <strong>Our office is located as follows:</strong> <br />{" "}
            Heathrow&nbsp;Car Service
            <br /> Aero House <br /> 611 Sipson Road <br /> West Drayton <br />{" "}
            UB7&nbsp;0JD <br /> United Kingdom
          </p>
          <p>
            Find out more about traveling by&nbsp;London Heathrow Taxi,
            including Business Class fares and quotes for destinations outside
            Central London. Contact us on 020 3887 3844(+44 (0)20 3887
            3844&nbsp;if calling from outside the UK).
          </p>
          <p>
            <strong>
              <em>Fully inclusive as well as&nbsp;</em>
            </strong>
            <strong>
              <em>cheap, Heathrow Car Service’s&nbsp;</em>
            </strong>
            <strong>
              <em>prices come with a ‘no hidden extra’ guarantee.</em>
            </strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default UiView;
