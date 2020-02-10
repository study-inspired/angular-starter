import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';

import { CONTAINERS } from './containers';
import { COMPONENTS } from './components';
import { ChatRoutingModule } from './chat-routing.module';
import { ChatPageComponent } from './containers/chat-page/chat-page.component';
import { ChatTextMessageComponent } from './components/chat-text-message/chat-text-message.component';
import { ChatImageMessageComponent } from './components/chat-image-message/chat-image-message.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    PerfectScrollbarModule,

    ChatRoutingModule
  ],
  declarations: [
    CONTAINERS,
    COMPONENTS,
    ChatPageComponent,
    ChatTextMessageComponent,
    ChatImageMessageComponent
  ],
  exports: [
    CONTAINERS,
    COMPONENTS
  ]
})
export class ChatModule { }
