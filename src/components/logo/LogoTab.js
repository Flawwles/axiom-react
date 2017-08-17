import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Logo from './Logo';

export default class LogoTab extends Component {
  static propTypes = {
    /** Color of the Logo background */
    color: PropTypes.oneOf(['grey', 'white']),
    /** Height of the Logo, higher precedence than width */
    height: PropTypes.string,
    /** Width of the Logo, lower precedence than height */
    width: PropTypes.string,
  };

  static defaultProps = {
    color: 'grey',
  };

  render() {
    const viewBoxWidth = 100;
    const viewBoxHeight = 124;
    const { color, ...rest } = this.props;
    const colorMap = {
      grey: '#F3F3F3',
      white: '#FFFFFF',
    };

    /* eslint-disable max-len, react/jsx-sort-props */
    return (
      <Logo { ...rest } viewBoxHeight={ viewBoxHeight } viewBoxWidth={ viewBoxWidth }>
        <svg height="100%" viewBox={ `0 0 ${viewBoxWidth} ${viewBoxHeight}` } width="100%" x="0%" y="0%">
          <g>
            <polygon fill={ colorMap[color] } points="0 124 100 124 100 0 0 0"></polygon>
            <g transform="translate(13.260870, 25.589655)">
              <circle fill="#9C7BB8" cx="20.3741298" cy="2.27534429" r="2.06500006"></circle>
              <circle fill="#5CC4E8" cx="61.5741322" cy="10.985345" r="2.82500005"></circle>
              <circle fill="#5CC4E8" cx="17.6041295" cy="29.8553445" r="2.71499991"></circle>
              <circle fill="#F66800" cx="34.5791282" cy="29.0703429" r="8.14999962"></circle>
              <circle fill="#F7BE00" cx="42.3191285" cy="17.652957" r="3.48000002"></circle>
              <circle fill="#FF8D00" cx="49.9620863" cy="26.1145755" r="5.32499981"></circle>
              <circle fill="#8EA534" cx="65.9654615" cy="32.8173493" r="4.45499992"></circle>
              <circle fill="#FF536B" cx="47.9986497" cy="39.6703448" r="6.8499999"></circle>
              <circle fill="#FF8D00" cx="61.5917036" cy="48.8870421" r="2.28500009"></circle>
              <circle fill="#F66800" cx="36.4091282" cy="41.2981308" r="2.5"></circle>
              <circle fill="#F7BE00" cx="26.1327076" cy="44.7376828" r="3.80500007"></circle>
              <circle fill="#969C9E" cx="1.99602338" cy="52.6707932" r="1.95500004"></circle>
              <circle fill="#008FB6" cx="40.4032226" cy="59.5205628" r="2.71499991"></circle>
              <g fill="#4C4C4C">
                <path d="M6.2806087,82.1168721 C6.2806087,83.0101686 6.09756522,83.7348859 5.75191304,84.2121652 C5.4303913,84.6549031 4.96278261,84.8699721 4.32278261,84.8699721 C3.14995652,84.8699721 2.62495652,83.9101997 2.62495652,82.9588997 L2.62495652,81.0171962 C2.62495652,80.0687203 3.64843478,79.4393721 4.3253913,79.4393721 C4.96473913,79.4393721 5.43126087,79.6540066 5.75147826,80.0952238 C6.11234783,80.5935755 6.2806087,81.2359583 6.2806087,82.1168721 M4.33517391,78.1196307 L4.31278261,78.1196307 C3.73691304,78.1224548 3.13343478,78.3244893 2.62647826,78.6638203 L2.62365217,75.3908617 L1.30452174,75.38391 L1.30452174,82.9602031 C1.30452174,84.8623686 2.543,86.1907997 4.3253913,86.1907997 L4.33321739,86.1907997 L4.33517391,86.1907997 C5.353,86.1862376 6.16604348,85.8073686 6.75169565,85.0650548 C7.32343478,84.34251 7.60126087,83.37861 7.60126087,82.1181755 C7.60126087,80.890979 7.33126087,79.9781307 6.75169565,79.2455928 C6.16452174,78.5030617 5.35147826,78.1241928 4.33517391,78.1196307"></path>
                <path d="M23.8673913,78.1184359 C22.0130435,78.1184359 20.906087,79.3058772 20.906087,81.2945048 L20.906087,86.0607807 L22.2278261,86.0607807 L22.2278261,81.2827738 C22.2278261,79.6165324 23.3752174,79.4368738 23.8686957,79.4368738 C24.3619565,79.4368738 25.5093478,79.6165324 25.5093478,81.2827738 L25.5093478,86.0620841 L26.831087,86.0620841 L26.831087,81.2940703 C26.8291304,79.30566 25.721087,78.1184359 23.8673913,78.1184359"></path>
                <path d="M12.4090217,79.4968107 C12.2231522,79.4490176 12.0496739,79.4368521 11.9207609,79.4368521 C11.4275,79.4368521 10.2801087,79.6165107 10.2801087,81.2827521 L10.2801087,86.060759 L8.95815217,86.060759 L8.95815217,81.2944831 C8.95815217,79.3058555 10.0651087,78.1184141 11.9194565,78.1184141 C12.2168478,78.1184141 12.4951087,78.1490452 12.7527174,78.2085693 L12.4090217,79.4968107 Z"></path>
                <path d="M33.1656739,81.0172179 L33.1656739,82.9602248 C33.1656739,83.9113076 32.6406739,84.87108 31.4680652,84.87108 C30.8278478,84.87108 30.3602391,84.656011 30.0391522,84.2141421 C29.6880652,83.7292593 29.5100217,83.0240938 29.5100217,82.1181972 C29.5100217,81.2361972 29.6782826,80.5938145 30.0393696,80.096549 C30.3589348,79.6551145 30.8252391,79.4406972 31.4661087,79.4406972 L31.4676304,79.4406972 C32.1435,79.4406972 33.1656739,80.0693938 33.1656739,81.0172179 L33.1656739,81.0172179 Z M33.1643696,75.3834972 L33.1615435,78.6612352 C32.6558913,78.3236421 32.0517609,78.1211731 31.4752391,78.118349 L31.4530652,78.118349 C30.4350217,78.1231283 29.6219783,78.5019972 29.0365435,79.244311 C28.4569783,79.9766317 28.1869783,80.88948 28.1869783,82.1168938 C28.1869783,83.3758076 28.4648043,84.3397076 29.0365435,85.0637731 C29.6239348,85.8063041 30.4369783,86.1849559 31.4550217,86.1895179 L31.4715435,86.1895179 L31.4743696,86.1895179 C33.2478478,86.1895179 34.4863261,84.8610869 34.4863261,82.9589214 L34.4863261,75.3828455 L33.1643696,75.3834972 Z"></path>
                <path d="M61.7442174,79.4367652 C62.2403043,79.4367652 62.6646522,79.578841 63.0053043,79.8584307 C63.2933478,80.0958755 63.4461739,80.42391 63.4724783,80.8981479 L64.7557391,80.832541 C64.7181304,79.9464134 64.4363913,79.3298824 63.8687826,78.8521686 C63.2859565,78.3635928 62.5716087,78.1157203 61.7455217,78.1157203 C60.719,78.1157203 59.8987826,78.4950238 59.3070435,79.2436376 C58.7357391,79.9687893 58.457913,80.9209583 58.457913,82.1546721 C58.457913,83.3894721 58.7359565,84.3412066 59.3076957,85.0639686 C59.900087,85.8117134 60.7203043,86.1907997 61.7455217,86.1907997 C62.572913,86.1907997 63.2874783,85.9429272 63.8687826,85.4543514 C64.4344348,84.9798962 64.7163913,84.3453341 64.7555217,83.4585548 L63.4724783,83.3890376 C63.4461739,83.8643617 63.2933478,84.2108617 63.0057391,84.4478721 C62.6646522,84.7278962 62.2403043,84.8699721 61.7442174,84.8699721 C61.0992174,84.8699721 60.629,84.6546859 60.3076957,84.2128169 C59.9509565,83.7198962 59.7772609,83.0462307 59.7772609,82.1533686 C59.7772609,81.2587686 59.9507391,80.5853203 60.3072609,80.0945721 C60.629,79.6518341 61.0992174,79.4367652 61.7442174,79.4367652"></path>
                <path d="M69.3892609,78.1184359 C68.7044783,78.1184359 68.2186087,78.2822359 67.7301304,78.6044048 C67.6668696,78.6458979 67.6055652,78.6897807 67.546,78.7356186 L67.546,75.3961841 L66.2242609,75.3961841 L66.2242609,86.0607807 L67.546,86.0607807 L67.546,81.335129 C67.546,80.350591 68.1968696,79.4564255 69.2862174,79.4564255 C70.3062174,79.4564255 70.8468696,80.3279979 70.8468696,81.2797324 L70.8468696,86.0594772 L72.1740435,86.0594772 L72.1740435,81.3998669 C72.1740435,78.5594359 70.254913,78.1184359 69.3892609,78.1184359"></path>
                <path d="M57.2870217,84.7905486 C56.9661522,85.0395072 56.5826739,84.9949728 56.276587,84.7770797 C56.0524565,84.6176245 55.8585435,84.3208728 55.8585435,83.8727038 L55.8585435,79.6288934 L57.2726739,79.6288934 L57.2726739,78.3050245 L55.8570217,78.3050245 L55.8570217,76.7447969 L54.5272391,76.7447969 L54.5272391,78.303721 L53.6757174,78.303721 L53.6757174,79.62759 L54.5285435,79.62759 L54.5285435,83.8700969 C54.5285435,84.9615176 55.0311522,85.6899279 55.7200652,86.0286072 C56.4548478,86.3835797 57.3883261,86.3025486 58.0246304,85.7783452 L57.2870217,84.7905486 Z"></path>
                <path d="M51.1951304,83.2542828 C51.1951304,84.4525862 50.2218696,84.8777276 49.3886087,84.8777276 C48.8905652,84.8777276 47.7323043,84.7699759 47.7323043,83.7708828 C47.7323043,83.4910759 47.8081739,83.1074276 48.1701304,82.8678103 C48.5277391,82.6303655 49.0466522,82.6121172 49.7407826,82.6121172 L51.1951304,82.6121172 L51.1951304,82.6907586 L51.194913,82.6907586 L51.1951304,82.6922793 L51.1951304,83.2542828 Z M52.5155652,80.7581793 C52.5155652,79.9126759 52.2318696,79.248569 51.6723043,78.7845414 C51.1401304,78.3426724 50.4390435,78.1184793 49.5879565,78.1184793 C48.7492609,78.1184793 48.0564348,78.3420207 47.5290435,78.7825862 C47.0318696,79.1973 46.7638261,79.7080345 46.7323043,80.3004517 L48.0151304,80.4088552 C48.0455652,80.1581586 48.1677391,79.952431 48.3883913,79.7792897 C48.6781739,79.5520552 49.0823043,79.4367 49.5892609,79.4367 C50.129913,79.4367 50.5425217,79.5566172 50.8164348,79.7929759 C51.072087,80.0139103 51.1964348,80.3256517 51.1964348,80.7466655 L51.1964348,81.2871621 L49.7212174,81.2871621 C48.8953478,81.2871621 48.0325217,81.3273517 47.3566522,81.8072379 C46.7473043,82.2395483 46.4118696,82.9286379 46.4118696,83.7474207 C46.4118696,85.231831 47.5801304,86.1907345 49.3886087,86.1907345 C50.0907826,86.1907345 50.849913,86.0078172 51.4444783,85.5707276 L51.487087,86.0608241 L52.5155652,86.0608241 L52.5155652,83.2545 L52.5155652,83.2542828 L52.5155652,80.7581793 Z"></path>
                <path d="M18.1223261,83.2542828 C18.1223261,84.4525862 17.1490652,84.8777276 16.3158043,84.8777276 C15.8177609,84.8777276 14.6595,84.7699759 14.6595,83.7708828 C14.6595,83.4910759 14.7353696,83.1074276 15.0973261,82.8678103 C15.4549348,82.6303655 15.9738478,82.6121172 16.6679783,82.6121172 L18.1223261,82.6121172 L18.1223261,82.6907586 L18.1221087,82.6907586 L18.1223261,82.6922793 L18.1223261,83.2542828 Z M19.4427609,80.7581793 C19.4427609,79.9126759 19.1590652,79.248569 18.5995,78.7845414 C18.0673261,78.3426724 17.3662391,78.1184793 16.5151522,78.1184793 C15.6764565,78.1184793 14.9836304,78.3420207 14.4562391,78.7825862 C13.9590652,79.1973 13.6910217,79.7080345 13.6595,80.3004517 L14.9423261,80.4088552 C14.9727609,80.1581586 15.0949348,79.952431 15.315587,79.7792897 C15.6053696,79.5520552 16.0095,79.4367 16.5164565,79.4367 C17.0571087,79.4367 17.4697174,79.5566172 17.7436304,79.7929759 C17.9992826,80.0139103 18.1236304,80.3256517 18.1236304,80.7466655 L18.1236304,81.2871621 L16.648413,81.2871621 C15.8225435,81.2871621 14.9597174,81.3273517 14.2838478,81.8072379 C13.6745,82.2395483 13.3390652,82.9286379 13.3390652,83.7474207 C13.3390652,85.231831 14.5073261,86.1907345 16.3158043,86.1907345 C17.0179783,86.1907345 17.7771087,86.0078172 18.3716739,85.5707276 L18.4142826,86.0608241 L19.4427609,86.0608241 L19.4427609,83.2545 L19.4427609,83.2542828 L19.4427609,80.7581793 Z"></path>
                <polygon points="44.675913 78.2485417 43.0535217 83.8876934 41.4313478 78.2485417 40.1800435 78.2485417 38.5576522 83.8876934 36.9354783 78.2485417 35.6841739 78.2485417 37.9322174 86.0622797 39.1833043 86.0622797 40.8056957 80.4231279 42.428087 86.0622797 43.6791739 86.0622797 45.927 78.2485417"></polygon>
              </g>
            </g>
          </g>
        </svg>
      </Logo>
    );
    /* eslint-enable max-len, react/jsx-sort-props */
  }
}
