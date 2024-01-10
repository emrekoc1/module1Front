import { FuseNavigation } from '@fuse/types';
import { url } from 'inspector';

export const navigation: FuseNavigation[] = [
    {
        id: 'home',
        title: 'Home',
        translate: 'NAV.home',
        type: 'item',
        icon: 'home',
        url: '/apps/home',
    },
    {
        id: 'kokpit',
        title: 'Yönetim Raporları ve Kokpitler',
        translate: 'NAV.kokpit',
        type: 'item',
        icon: 'dashboard',
        url: '/apps/lFlow',
    },
    {
        id: 'dilekSikayet',
        title: 'Dilek Şikayet Kutusu',
        translate: 'NAV.dilekSikayet',
        type: 'item',
        icon: 'send',
        url: '/apps/dilekOneri',
    },
    {
        id: 'profil',
        title: 'Profil',
        translate: 'NAV.profil',
        type: 'item',
        icon: 'supervised_user_circle',
        url: '/apps/error-500',
    },
    {
        id: 'mydepartment',
        title: 'Birimim',
        translate: 'NAV.mydepartment',
        type: 'item',
        icon: 'supervised_user_circle',
        url: '/apps/mydepartment',
    },
    {
        id: 'takvim',
        title: 'takvim',
        translate: 'NAV.takvim',
        type: 'item',
        icon: 'supervised_user_circle',
        url: '/apps/takvim',
    },
    {
        id: 'ik',
        title: 'İnsan Kaynakları İşlemleri',
        translate: 'NAV.ik',
        type: 'collapsable',
        icon: 'group',
        children: [
            {
                id: 'izin',
                title: 'İzin Talep',
                type: 'item',
                translate: 'NAV.izinTalep',
                icon: 'assignment',
                url: '/apps/ik/1',
            },
            {
                id: 'turnike',
                title: 'Turnike Bilgileri',
                type: 'item',
                icon: 'event_available',
                translate: 'NAV.turnike',
                url: '/apps/ik/2',
            },
            {
                id: 'gorev',
                title: 'Görev Talep',
                type: 'collapsable',
                icon: 'assignment',
                translate: 'NAV.gorev',
                children: [
                    {
                        id: 'sehirIci',
                        title: 'Sehir İçi İzin Talebi',
                        type: 'item',
                        icon: 'event_available',
                        translate: 'NAV.sehirIci',
                        url: '/apps/ik/3',
                    },
                    {
                        id: 'sehirDisi',
                        title: 'Sehir Dışı İzin Talebi',
                        type: 'item',
                        icon: 'event_available',
                        translate: 'NAV.sehirDisi',
                        url: '/apps/ik/4'
                    }
                ]

            },
            {
                id: 'bodro',
                title: 'Bodro',
                type: 'item',
                icon: 'print',
                translate: 'NAV.bodro',
                url: '/apps/bodro',
            },
        ]
    },

    {
        id: 'duyru',
        title: 'duyrular',
        translate: 'NAV.duyrular',
        type: 'item',
        icon: 'notifications_active',
        url: '/apps/duyru',
    },
    {
        id: 'anketler',
        title: 'Anketler',
        translate: 'NAV.anketler',
        type: 'item',
        icon: 'verified_user',
        url: '/apps/anket',
    },
    {
        id: 'egitim',
        title: 'Eğitimlerim',
        translate: 'NAV.egitim',
        type: 'item',
        icon: 'collections_bookmark',
        url: '/apps/egitimler',
    },
    {
        id: 'yardımMasa',
        title: 'Yardım Masası',
        translate: 'NAV.yardımMasa',
        type: 'collapsable',
        icon: 'chat',
        children: [
            {
                id: 'it',
                title: 'Bilgi İşlem ',
                type: 'collapsable',
                icon: 'cloud_upload',
                translate: 'NAV.it',
                children: [
                    {
                        id: 'yazilimDestek',
                        title: 'Yazılım Destek Talebi',
                        type: 'item',
                        icon: 'code',
                        translate: 'NAV.yazilimDestek',
                        url: '/apps/bilgiIslem/1',
                    },
                    {
                        id: 'donanimDestek',
                        title: 'Donanım Destek Talebi',
                        type: 'item',
                        icon: 'computer',
                        translate: 'NAV.donanimDestek',
                        url: '/apps/bilgiIslem/2',
                    },
                ]


            },
            {
                id: 'destekHizmet',
                title: 'Destek Hizmetleri',
                type: 'collapsable',
                translate: 'NAV.destekHizmet',
                icon: 'build',
                children: [
                    {
                        id: 'altYapi',
                        title: 'Alt Yapı Talepleri',
                        type: 'item',
                        icon: 'settings',
                        translate: 'NAV.altYapi',
                        url: '/apps/bakimOnarim/1',
                    },
                    {
                        id: 'iklimlendirme',
                        title: 'İklimlendirme',
                        type: 'item',
                        icon: 'wb_cloudy',
                        translate: 'NAV.iklimlendirme',
                        url: '/apps/bakimOnarim/2',
                    },
                    {
                        id: 'aydinlatma',
                        title: 'Aydınlatma',
                        type: 'item',
                        icon: 'wb_auto',
                        translate: 'NAV.aydinlatma',
                        url: '/apps/bakimOnarim/3',
                    },
                ]
            },
            {
                id: 'ulastirma',
                title: 'Ulaştırma ',
                type: 'collapsable',
                icon: 'directions_car',
                translate: 'NAV.ulastirma',
                children: [
                    {
                        id: 'aracTalep',
                        title: 'Araç Talep',
                        type: 'item',
                        icon: 'local_shipping',
                        translate: 'NAV.aracTalep',
                        url: '/apps/ulastirma/1',
                    },
                    {
                        id: 'personelServis',
                        title: 'Personel Servisi Talepleri',
                        type: 'item',
                        icon: 'directions_bus',
                        translate: 'NAV.personelServis',
                        url: '/apps/ulastirma/2',
                    },

                ]
            },

        ]
    },
    {
        id: 'evrak',
        title: 'Evraklar',
        translate: 'NAV.evrak',
        type: 'item',
        icon: 'collections_bookmark',
        url: '/apps/evrak',
    },
    {
        id: 'acilPhone',
        title: 'Şirket İçi Acil Telefonlar',
        translate: 'NAV.acilPhone',
        type: 'item',
        icon: 'warning',
        url: '/apps/sos-phone',
    },
    {
        id: 'yemekList',
        title: 'Aylık Yemek Listesi',
        translate: 'NAV.yemekList',
        type: 'item',
        icon: 'fastfood',
        url: '/apps/yemekList',
    },
    {
        id: 'guzergah',
        title: 'Servis Güzergahları',
        translate: 'NAV.guzergah',
        type: 'item',
        icon: 'navigation',
        url: '/apps/guzergah',
    },
    {
        id: 'phone',
        title: 'Telefon Rehberi',
        translate: 'NAV.phone',
        type: 'item',
        icon: 'contacts',
        url: '/apps/rehber',
    },

    {
        id: 'quit',
        title: 'Çıkış',
        translate: 'NAV.quit',
        type: 'item',
        icon: 'verified_user',
        url: '/apps/quitMenu',
    },

    // {
    //     id: 'talep',
    //     title: 'Talepler',
    //     translate: 'NAV.talepler',
    //     type: 'item',
    //     icon: 'bookmarks',
    //     url: '/apps/talep',
    // },






    // {
    //     id: 'montage',
    //     title: 'Montage',
    //     translate: 'NAV.montage',
    //     type: 'group',
    //     children: [
    //         {
    //             id: 'montageReports',
    //             title: 'Montage Reports',
    //             translate: 'NAV.montage_reports',
    //             type: 'collapsable',
    //             icon: 'backup',
    //             url: '',
    //             children: [
    //                 {
    //                     id: 'productionDetail',
    //                     title: 'Production Detail',
    //                     type: 'item',
    //                     translate: 'NAV.production_detail',
    //                     url: '/apps/montage-report/production',
    //                 },
    //                 {
    //                     id: 'productionDetail',
    //                     title: 'Durbun Detail',
    //                     type: 'item',
    //                     translate: 'NAV.durbun_detail',
    //                     url: '/apps/montage-report/DurbunDetail',
    //                 },
    //                 {
    //                     id: 'repairDetail',
    //                     title: 'Repair Detail',
    //                     type: 'item',
    //                     translate: 'NAV.repair_detail',
    //                     url: '/apps/montage-report/repair',
    //                 },
    //                 {
    //                     id: 'projectDetail',
    //                     title: 'Preject Detail',
    //                     type: 'item',
    //                     translate: 'NAV.project_detail',
    //                     url: '/apps/montage-report/ProjectStatus',
    //                 },
    //                 {
    //                     id: 'fireDetail',
    //                     title: 'Fire Detail',
    //                     type: 'item',
    //                     translate: 'NAV.fire_detail',
    //                     url: '/apps/montage-report/firereport',
    //                 },

    //                 {
    //                     id: 'qualityControl',
    //                     title: 'Quality Control',
    //                     type: 'item',
    //                     translate: 'NAV.quality_control',
    //                     url: '/apps/montage-report/quality-control',
    //                 },
    //                 {
    //                     id: 'nonConformance',
    //                     title: 'NonConformance',
    //                     type: 'item',
    //                     translate: 'NAV.nonconformance',
    //                     url: '/apps/montage-report/nonconformances',
    //                 },
    //             ],
    //         },

    //         {
    //             id: 'montageSection',
    //             title: 'Montage Section',
    //             translate: 'NAV.montage_section',
    //             type: 'collapsable',
    //             icon: 'apps',
    //             children: [
    //                 {
    //                     id: 'montageBom',
    //                     title: 'Montage Bom',
    //                     translate: 'NAV.montage_bom',
    //                     type: 'collapsable',
    //                     children: [
    //                         {
    //                             id: 'montageAddBom',
    //                             title: 'Montage Add Bom',
    //                             translate: 'NAV.montage_add_bom',
    //                             type: 'item',
    //                             url: '/apps/montage/bom/single-bom',
    //                         },
    //                         {
    //                             id: 'montageBoms',
    //                             title: 'Montage Boms',
    //                             type: 'item',
    //                             translate: 'NAV.montage_boms',
    //                             url: '/apps/montage/bom/list',
    //                         },
    //                     ],
    //                 },
    //                 {
    //                     id: 'excelList',
    //                     title: 'Excel List',
    //                     translate: 'NAV.excel_list',
    //                     type: 'item',
    //                     url: '/apps/montage/ExcelList',
    //                     exactMatch: true,
    //                 },
    //             ],
    //         },

    //         {
    //             id: 'montageBoxManagement',
    //             title: 'Montage Box Management',
    //             translate: 'NAV.montage_box_management',
    //             type: 'collapsable',
    //             icon: 'apps',
    //             children: [
    //                 {
    //                     id: 'addNewBox',
    //                     title: 'Add New Box',
    //                     translate: 'NAV.add_new_box',
    //                     type: 'item',
    //                     url: '/apps/montage/boxes/add-boxes',
    //                     exactMatch: true,
    //                 },
    //                 {
    //                     id: 'boxesList',
    //                     title: 'Boxes List',
    //                     translate: 'NAV.boxes_list',
    //                     type: 'item',
    //                     url: '/apps/montage/boxes',
    //                     exactMatch: true,
    //                 },
    //             ],
    //         },
    //     ]
    // },
    // {
    //     id: 'factory',
    //     title: 'Factory',
    //     translate: 'NAV.factory',
    //     type: 'group',
    //     children: [
    //         {
    //             id: 'dashboard',
    //             title: 'Dashboard',
    //             translate: 'NAV.dashboard',
    //             type: 'item',
    //             icon: 'dashboard',
    //             url: '/apps/general-status',
    //         },

    //         {
    //             id: 'mainSettings',
    //             title: 'Main Settings',
    //             translate: 'NAV.main_settings',
    //             type: 'collapsable',
    //             icon: 'build',
    //             children: [
    //                 {
    //                     id: 'factory',
    //                     title: 'Factory',
    //                     translate: 'NAV.factory',
    //                     type: 'item',
    //                     url: '/apps/ifactory/config',
    //                     exactMatch: true,
    //                 },
    //                 {
    //                     id: 'management',
    //                     title: 'Management',
    //                     translate: 'NAV.management',
    //                     type: 'item',
    //                     url: '/apps/ifactory/managament',
    //                 },
    //                 {
    //                     id: 'employee',
    //                     title: 'Employee',
    //                     translate: 'NAV.employee',
    //                     type: 'item',
    //                     url: '/apps/ifactory/operators',
    //                 },
    //                 {
    //                     id: 'shift',
    //                     title: 'Shift',
    //                     translate: 'NAV.shift',
    //                     type: 'item',
    //                     url: '/apps/ifactory/shifts',
    //                 },
    //                 {
    //                     id: 'machineStopManagement',
    //                     title: 'Machine Stop Management',
    //                     translate: 'NAV.machine_stop_management',
    //                     type: 'item',
    //                     url: '/apps/stop_categories/machine-stops',
    //                 },
    //                 {
    //                     id: 'stopCategory',
    //                     title: 'Stop Category',
    //                     translate: 'NAV.stop_category',
    //                     type: 'item',
    //                     url: '/apps/stop_categories/list',
    //                 },
    //                 {
    //                     id: 'projectManagement',
    //                     title: 'Proje Yönetimi',
    //                     translate: 'NAV.project_management',
    //                     type: 'item',
    //                     url: '/apps/ifactory/project',
    //                 }

    //             ],
    //         },

    //         {
    //             id: 'boxManagement',
    //             title: 'Box Management',
    //             translate: 'NAV.box_management',
    //             type: 'collapsable',
    //             icon: 'apps',
    //             children: [
    //                 {
    //                     id: 'addNewBox',
    //                     title: 'Add New Box',
    //                     translate: 'NAV.add_new_box',
    //                     type: 'item',
    //                     url: '/apps/boxes/add-boxes',
    //                     exactMatch: true,
    //                 },
    //                 {
    //                     id: 'boxesList',
    //                     title: 'Boxes List',
    //                     translate: 'NAV.boxes_list',
    //                     type: 'item',
    //                     url: '/apps/boxes/list',
    //                     exactMatch: true,
    //                 },
    //                 {
    //                     id: 'newBoxesList',
    //                     title: 'New Boxes List',
    //                     translate: 'NAV.new_boxes_list',
    //                     type: 'item',
    //                     url: '/apps/boxes/list-boxes',
    //                     exactMatch: true,
    //                 },
    //             ],
    //         },
    //     ]
    // },
    // {
    //     id: 'stockManagement',
    //     title: 'stockManagement',
    //     translate: 'NAV.stock_management',
    //     type: 'item',
    //     icon: 'category',
    //     url: '/apps/stock',
    // },
    // {
    //     id: 'about',
    //     title: 'about',
    //     translate: 'NAV.about',
    //     type: 'group',
    //     children: [
    //         {
    //             id: 'bulutfiy',
    //             title: 'bulutfiy',
    //             translate: 'NAV.bulutify',
    //             type: 'item',
    //             icon: 'security',
    //             url: 'apps/about'
    //         }
    //     ]
    // },
];
