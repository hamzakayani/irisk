import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { AdddepositsPage } from '../pages/adddeposits/adddeposits';
import { BookingPage } from '../pages/booking/booking';
import { BookingaddPage } from '../pages/bookingadd/bookingadd';
import { BookingaddselectionPage } from '../pages/bookingaddselection/bookingaddselection';
import { CommunityPage } from '../pages/community/community';
import { ContactPage } from '../pages/contact/contact';
import { CommunitywallPage } from '../pages/communitywall/communitywall';
import { CommunitywallpostPage } from '../pages/communitywallpost/communitywallpost';
import { ContactsPage } from '../pages/contacts/contacts';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { DeliveryPage } from '../pages/delivery/delivery';
import { DepositetabPage } from '../pages/depositetab/depositetab';
import { DepositsPage } from '../pages/deposits/deposits';
import { DocumentsPage } from '../pages/documents/documents';
import { DeliveryaddPage } from '../pages/deliveryadd/deliveryadd';
import { DeposithowtopayPage } from '../pages/deposithowtopay/deposithowtopay';
import { DepositedetailPage } from '../pages/depositedetail/depositedetail';
import { EpaytabPage } from '../pages/epaytab/epaytab';
import { EpayinvoicePage } from '../pages/epayinvoice/epayinvoice';
import { EpaypaymentPage } from '../pages/epaypayment/epaypayment';
import { EpaypaymentdetailPage } from '../pages/epaypaymentdetail/epaypaymentdetail';
import { EpayinvoicedetailPage } from '../pages/epayinvoicedetail/epayinvoicedetail';
import { HelpdestmytckPage } from '../pages/helpdestmytck/helpdestmytck';
import { HelpdestindPage} from '../pages/helpdestind/helpdestind';
import { HelpdestcreatePage } from '../pages/helpdestcreate/helpdestcreate';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { NoticboardPage } from '../pages/noticboard/noticboard';
import { NoticboarddetailPage } from '../pages/noticboarddetail/noticboarddetail';
import { PromoPage } from '../pages/promo/promo';
import { PromodetailPage } from '../pages/promodetail/promodetail';
import { ServicesPage } from '../pages/services/services';
import { ServicesdetailPage } from '../pages/servicesdetail/servicesdetail';
import { ServicesdetailvendorPage } from '../pages/servicesdetailvendor/servicesdetailvendor';
import { TabsPage } from '../pages/tabs/tabs';
import { UnitsPage } from '../pages/units/units';
import { UsefulinfotabPage } from '../pages/usefulinfotab/usefulinfotab';
import { VisitortabPage } from '../pages/visitortab/visitortab';
import { VisitorPage } from '../pages/visitor/visitor';
import { VisitorshowPage } from '../pages/visitorshow/visitorshow';
import { VisitoraddPage } from '../pages/visitoradd/visitoradd';

import { HttpModule } from '@angular/http';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { RestProvider } from '../providers/rest/rest';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { SuperTabsModule } from 'ionic2-super-tabs';
import { IonicImageViewerModule } from 'ionic-img-viewer';
import { CallNumber } from '@ionic-native/call-number';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    DashboardPage,
    LoginPage,
    CommunityPage,
    UnitsPage,
    DepositsPage,
    AdddepositsPage,
    NoticboardPage,
    NoticboarddetailPage,
    HelpdestmytckPage,
    HelpdestindPage,
    HelpdestcreatePage,
    CommunitywallPage,
    CommunitywallpostPage,
    DepositetabPage,
    UsefulinfotabPage,
    ContactsPage,
    DocumentsPage,
    VisitortabPage,
    DeliveryPage,
    VisitorPage,
    VisitorshowPage,
    EpaytabPage,
    EpayinvoicePage,
    EpaypaymentPage,
    EpaypaymentdetailPage,
    EpayinvoicedetailPage,
    EpayinvoicedetailPage,
    BookingPage,
    BookingaddPage,
    BookingaddselectionPage,
    DeposithowtopayPage,
    VisitoraddPage,
    DeliveryaddPage,
    ServicesPage,
    ServicesdetailPage,
    ServicesdetailvendorPage,
    PromoPage,
    DepositedetailPage,
    PromodetailPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    SuperTabsModule.forRoot(),
    IonicImageViewerModule,
    HttpModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    DashboardPage,
    LoginPage,
    CommunityPage,
    UnitsPage,
    DepositsPage,
    AdddepositsPage,
    NoticboardPage,
    NoticboarddetailPage,
    HelpdestmytckPage,
    HelpdestindPage,
    HelpdestcreatePage,
    CommunitywallPage,
    CommunitywallpostPage,
    DepositetabPage,
    UsefulinfotabPage,
    ContactsPage,
    DocumentsPage,
    VisitortabPage,
    DeliveryPage,
    VisitorPage,
    VisitorshowPage,
    EpaytabPage,
    EpayinvoicePage,
    EpaypaymentPage,
    EpaypaymentdetailPage,
    EpayinvoicedetailPage,
    EpayinvoicedetailPage,
    BookingPage,
    BookingaddPage,
    BookingaddselectionPage,
    DeposithowtopayPage,
    VisitoraddPage,
    DeliveryaddPage,
    ServicesPage,
    ServicesdetailPage,
    ServicesdetailvendorPage,
    PromoPage,
    DepositedetailPage,
    PromodetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RestProvider,
    CallNumber
  ]
})
export class AppModule {}
