import React from 'react';
import PageBanner from '../../components/PageBanner/PageBanner';
import { Section } from '../../components/Section/Section';
import { InlineLink } from '../../components/InlineLink/InlineLink';
import { List } from '../../components/List/List';
import { TextBlock } from '../../components/Blocks/TextBlock';

export function CookieInfoPage() {
    const themeColor = 'orange';
    const pageArt = `${process.env.PUBLIC_URL}/page-about.svg`;
    return (
        <>
            <PageBanner header="JavaZone Website and Cookies" subHeader="Here, have a cookie from our cookie jar!" color={themeColor} artPath={pageArt} />
            <Section>
                <TextBlock color={themeColor} title="What are cookies?">
                    <p>
                        This Website uses cookies. A cookie is a small file of letters and numbers that we put on your computer. These cookies allow us to distinguish you from other users of the Website which helps us to provide you with a good experience when you browse our Website, and to improve our Website.
                    </p>
                    <p>
                        A cookie can be classified by its lifespan and the domain to which it belongs. By lifespan, a cookie is one of the following:
                        <List>
                            <li>session cookie which is erased when the user closes the browser</li> 
                            <li>persistent cookie which remains on the user's computer/device for a pre-defined period of time.</li>
                        </List>
                    </p>
                    <p> 
                        As for the domain to which it belongs, there are either:
                        <List>
                            <li>first-party cookies which are set by the web server of the visited page and share the same domain</li>
                            <li>third-party cookies are stored by a different domain to the visited page's domain. This can happen when the webpage references a file, such as JavaScript, located outside its domain.</li>
                        </List>
                    </p>
                </TextBlock>
                <TextBlock color={themeColor} title="How we use cookies">
                    <p>
                        The cookies we use has two main purposes:
                        <List>
                            <li>To let you store your favorite program schedule in your browser – we don't see or collect that information from you;</li>
                            <li>To see some basic information about people visiting our site – it is described in detail in the next section.</li>
                        </List>
                    </p>
                    <p>
                        The cookies we use allow us to see:
                        <List>
                            <li>The Internet domain and Internet Protocol (IP) address from which you access our Website;</li>
                            <li>The type of Internet browser and the operating system of the computer you use to access our Website;</li>
                            <li>The date and time you visit our Website;</li>
                            <li>The pages you visit on our Website;</li>
                            <li>The pages you shared on social media and to which social media network;</li>
                            <li>If you linked to our Website from another website, the address of that website; and</li>
                            <li>If you were referred to our Website from a search engine, the address of that website and the search term you used to find us.</li>
                        </List>
                        Any data processing that occur while using cookies used for the sole purpose of carrying out the transmission of a communication and/or strictly necessary to perform the services you required is based on Article 6 (1) lit. b GDPR.
                    </p>
                    <p>
                        In case personal data is processed in the course of using cookies and/or similar technologies that are used for other purposes, e.g. improving our website or marketing purposes, the processing is based on Article 6 (1) lit. f GDPR and represents our legitimate interest in maintaining our user base, bringing new users to the Website and informing (potential) users about services organized and provided by JavaZone.
                    </p>
                    <p>
                        You can control and/or delete cookies as you wish – for details, see <InlineLink external url="https://www.allaboutcookies.org">https://www.allaboutcookies.org</InlineLink>. You can delete all cookies that are already on your computer and you can set most browsers to prevent them from being placed. If you do this, however, you may have to manually adjust some preferences every time you visit the Website and some services and functionalities may not work.
                    </p>
                    <p>
                        Google Analytics
                    </p>
                    <p>
                        This Website uses Google Analytics, a web analytics service provided by Google, Inc. (“Google”). Google Analytics uses cookies to help us analyse how users use the site. The information generated by the cookie about your use of the Website (including your IP address) will be transmitted to and stored by Google on servers in the United States.
                    </p>
                    <p>
                        The Website uses Google Analytic’s IP anonymisation function. Google will truncate/anonymise the last octet of the IP address for Member States of the European Union as well as for other parties to the Agreement on the European Economic Area. Only in exceptional cases, the full IP address is sent to and shortened by Google servers in the USA. On our behalf, Google will use this information for the purpose of evaluating your use of the Website, compiling reports on Website activity and providing other services relating to Website activity and internet usage to us. Google will not associate your IP address with any other data held by Google. You may refuse the use of cookies by selecting the appropriate settings on your browser. However, please note that if you do this, you may not be able to use the full functionality of this Website.
                    </p>
                    <p>
                        Furthermore, you can prevent Google’s collection and use of data (cookies and IP address) by downloading and installing the browser plug-in available under <InlineLink external url="https://tools.google.com/dlpage/gaoptout?hl=en">https://tools.google.com/dlpage/gaoptout?hl=en</InlineLink>. An opt-out cookie will be set to prevent the future collection of your information when you visit this Website.
                    </p>
                    <p>
                        Further information can be found under <InlineLink external url="https://developers.google.com/analytics/devguides/collection/analyticsjs/cookie-usage">https://developers.google.com/analytics/devguides/collection/analyticsjs/cookie-usage</InlineLink>
                    </p>
                    <p>
                        The information generated by cookies on the use of this website (including your IP address) are transmitted to Google; <InlineLink external url="https://support.google.com/analytics/answer/2763052?hl=en">https://support.google.com/analytics/answer/2763052?hl=en</InlineLink>. You may refuse the use of cookies by selecting the appropriate settings on your browser. 
                    </p>
                    <p>
                        You can also opt-out of personalized advertising in Google AdWords Settings. For instructions, see <InlineLink external url="https://support.google.com/ads/answer/2662922?hl=en">https://support.google.com/ads/answer/2662922?hl=en</InlineLink>
                    </p>
                </TextBlock>
            </Section>
        </>
    )
}
