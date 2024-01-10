import { NgModule } from '@angular/core';

import { KeysPipe } from './keys.pipe';
import { GetByIdPipe } from './getById.pipe';
import { HtmlToPlaintextPipe } from './htmlToPlaintext.pipe';
import { FilterPipe } from './filter.pipe';
import { CamelCaseToDashPipe } from './camelCaseToDash.pipe';
import { ProfilePicturePipe } from './profilePicture/profilePicture.pipe';
import { ChatPersonSearchPipe } from './search/chat-person-search.pipe';
import { UserSearchPipe } from './search/user-search.pipe';
import { TruncatePipe } from './truncate/truncate.pipe';
import { MailSearchPipe } from './search/mail-search.pipe';
import { ExponentialStrengthPipe } from './tarih/exponential-strength.pipe';
import { testpipe } from './tarih/performans.pipe';
import { worktime } from './tarih/calisma_zamani.pipe';
import { toplamPerformans } from './tarih/toplam_performans.pipe';
import { TimeAgo } from './tarih/timeago.pipe';
import { operationSetting } from './operationsSettings/operationSettings.pipe';
import { operatorCalismaSuresi } from './tarih/operator_calisma_suresi.pipe';
import { Operator_toplam_calisma } from './tarih/toplam_calisma.pipe';
import { Operator_performans_hesapla } from './tarih/operator_performans.pipe';
import { Operator_performance } from './tarih/operator_performance.pipe';
import {  calisma_toplam_urun } from './tarih/operator_toplam_calistigi_urun.pipe';
import { Makina_performance } from './tarih/makina_performance.pipe';
import { makina_work_time } from './tarih/makina_work_time.pipe';
import { operatorCalisma2version } from './tarih/deneme.operator_calisma';
import { machinePerformance1 } from './tarih/machineReport2.pipe';
import { machinePerformance2 } from './tarih/machineReport3.pipe';

@NgModule({
    declarations: [
        KeysPipe,
        GetByIdPipe,
        HtmlToPlaintextPipe,
        FilterPipe,
        CamelCaseToDashPipe,
        ProfilePicturePipe,
        ChatPersonSearchPipe,
        UserSearchPipe,
        TruncatePipe,
        MailSearchPipe,
        ExponentialStrengthPipe,
        testpipe,
        worktime,
        toplamPerformans,
        TimeAgo,
        operationSetting,
        operatorCalismaSuresi,
        Operator_toplam_calisma,
        Operator_performans_hesapla,
        Operator_performance,
        calisma_toplam_urun,
        operatorCalisma2version,
        Makina_performance,
        makina_work_time,
        machinePerformance1,
        machinePerformance2
    ],
    imports     : [],
    exports     : [
        KeysPipe,
        GetByIdPipe,
        HtmlToPlaintextPipe,
        FilterPipe,
        CamelCaseToDashPipe,
        ProfilePicturePipe,
        ChatPersonSearchPipe,
        UserSearchPipe,
        TruncatePipe,
        MailSearchPipe,
        ExponentialStrengthPipe,
        testpipe,
        worktime,
        toplamPerformans,
        TimeAgo,
        operationSetting,
        operatorCalismaSuresi,
        Operator_toplam_calisma,
        Operator_performans_hesapla,
        Operator_performance,
        calisma_toplam_urun,
        operatorCalisma2version,
        Makina_performance,
        makina_work_time,
        machinePerformance1,
        machinePerformance2
    ]
})
export class FusePipesModule
{
}
