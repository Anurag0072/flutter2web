'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "87c4a3de9e48acfddbee82f892208b3d",
"assets/assets/accounting1.png": "139f442e27a173e3f79b44b23fe11c9b",
"assets/assets/affiliated.png": "ce2d1e555c7f5587873d147c06eecc76",
"assets/assets/ahmdabad.jpg": "70b68449087ef2fc7c90d42dd5acf9b9",
"assets/assets/ajmerW.png": "0829ef41c92269bd71033ed24804a5b2",
"assets/assets/amritsarW.png": "cef083ab5834c93d3304fa8ad984e234",
"assets/assets/app_logo.png": "6614593d67888b05f5ac070a1611999c",
"assets/assets/atithiInn.png": "f5dd4c5296289732ef1073becd83a1a0",
"assets/assets/background.png": "6b57203ae564a43ff26925e4b00a5840",
"assets/assets/background1.png": "e20b9ac369917fa12bb851a52f1f3907",
"assets/assets/bangaloreW.png": "8c6f0557984b7cd99f6e88479303613f",
"assets/assets/bhopal.png": "e3148c7b97ad52147cdd67f69d719946",
"assets/assets/billiards.jpg": "a5644ab6b96bb3b6ef0590b18ed39d23",
"assets/assets/booking2.png": "2f9f821a121142437d9f90487643870b",
"assets/assets/brand1.png": "f263d6a1525e928b81abc694168c8662",
"assets/assets/brand2.png": "24755c45e2eae390f2fd5bfb8e32ca18",
"assets/assets/brand3.png": "f52c72e0a2e4fe07150e45ee1b9772b2",
"assets/assets/budget.png": "1c3c8c056e82fccdecf00599570c00bf",
"assets/assets/building.png": "d8ad2d0386c77ef381592a0e709977ba",
"assets/assets/burger.png": "6cf456957cf2b36469bd14f7dbf36264",
"assets/assets/calender-png.jpg": "5e3bf236de48d7437ec730972cef70ed",
"assets/assets/card.png": "0bb0fddf47862d88c7714ba7e8aefeba",
"assets/assets/cascade.jpg": "2639266c147f4f0455f408a3fdff05c4",
"assets/assets/celcius.jpg": "c708bf6b9b74a6418b1697c9b35554d4",
"assets/assets/cheese_dip.png": "4611a682badaa844c9f2cf845fc14e4b",
"assets/assets/chennaiW.png": "b61612c2128adfacf9f35362cfa60fa2",
"assets/assets/cochin.jpg": "7e60f1a8402a9abaff5289731f602e99",
"assets/assets/Complaints.png": "52cecaacb746c267b7e99b2d4611da45",
"assets/assets/cookiechoco.jpg": "81cf644492838df3981768ba36f8ce4f",
"assets/assets/cookieclassic.jpg": "d37a62ad366dc0aac0a4d27ed86cc676",
"assets/assets/cookiecream.jpg": "7d128e61690e39c1b9f6cdf61abe3599",
"assets/assets/cookiemint.jpg": "287c5b185f1f8f6b515bce6e6b315378",
"assets/assets/cookievan.jpg": "1c78307abd12f745b6ee015a96aeb845",
"assets/assets/curve.png": "b441fce7cb0130ea742df057124eb460",
"assets/assets/cuttack.jpg": "ec3fa2973e6605c34e3e0442a6da8a95",
"assets/assets/Dashboard_Screen.gif": "941bcabddb2a020fb3ad2b154dd88760",
"assets/assets/Dhaba.jpg": "ccf956aa2406567351d9cba8f1e3ed2c",
"assets/assets/directory2.png": "988f3d957fc36cdccdcd35ee69dd91a1",
"assets/assets/doha.jpg": "24999f8aa7028c226bd6e1640fff7752",
"assets/assets/dubai.jpg": "4d4de876f4eb3c7158b0ad1aaa389f96",
"assets/assets/event0.jpg": "fcd92df2ba1bca6abf52fda538acac7c",
"assets/assets/event1.jpg": "9324fc629f47919a1d6913af76f45c64",
"assets/assets/event2.jpg": "1af979f19f49663be424ec0f14316d75",
"assets/assets/event3.jpg": "f6427fb561f2501b4889f206a4cdb52d",
"assets/assets/event4.jpg": "d9d27417b286acb426e75da5cfe6f0a3",
"assets/assets/event5.jpg": "c19fe10b8d666ccb004b7b7beb69ceed",
"assets/assets/event6.jpg": "f4e5fec4d07118384082e52be18265c8",
"assets/assets/event7.jpg": "8746e66533ac54838bc980d448246016",
"assets/assets/event8.jpg": "4ebd2efea4131dcc1ea7063768497ca4",
"assets/assets/Events_Screen.png": "39200c90fb466f07127eb636deac75d4",
"assets/assets/family.png": "400a9406dca415e4743a7caaf802655c",
"assets/assets/fb.png": "88a6db57627d6b4f6b046f5f26a6f465",
"assets/assets/ferns-club-bistro.jpg": "44edc95c2933ce53ebf41d3ba5d4b353",
"assets/assets/filter.png": "bffe11edb4c27d4486fbf2570b786974",
"assets/assets/fries.png": "0544923a0e505b01dc66258200ede2a8",
"assets/assets/goa.jpg": "3c34ff6182a9e989513bdb64951f9753",
"assets/assets/google.png": "5bbde2ea9bdea9b5db4a71f9e03719ac",
"assets/assets/GREEN-NICHE-1.jpg": "d1ffe365a0e03472a74ae16bbb1c71dd",
"assets/assets/green-niche-top.jpg": "cfa9772585a6046999af9188d25899e6",
"assets/assets/guest.png": "59aba4bd171086d3c7d3bfe1d390704d",
"assets/assets/gwalior.jpg": "5b9e4e9039719ef95cdb524b192ef39b",
"assets/assets/gym.png": "1858bec245b10b4db397c76ab108c4cd",
"assets/assets/gym1.jpg": "737e51f2e2964306105825e193830626",
"assets/assets/hall1.jpg": "be26064fed02f0129df310ec51beafaa",
"assets/assets/hall2.jpg": "38edaaa16463bc4ef0df64031a6f4bc1",
"assets/assets/hall3.jpg": "a511c2df09ef4d1dfbc771884036e850",
"assets/assets/help.png": "f3491c70a4776e02706d087cff61d702",
"assets/assets/HelpDesk_Screen.png": "de014c9ba4abafa89df54dccfed51d95",
"assets/assets/history-book%2520(1).png": "57fdbe3c3032a1c415178caab31e3e5b",
"assets/assets/history-book.png": "86ae7400962b9663e0464f0be007506a",
"assets/assets/history.png": "42ac7e9c9a0bb1fd9392504a30e5a966",
"assets/assets/hotel-adi-nagpur.jpg": "d4788b7f6da0e8173ea32da3a432854c",
"assets/assets/hydrabad.jpg": "eda9772c0038d968062eff5177d32047",
"assets/assets/ice_cream.png": "84b6b01ac25efeab82f88f7bfa9896e5",
"assets/assets/icon/icon.png": "6614593d67888b05f5ac070a1611999c",
"assets/assets/icon-logout.png": "532d9220e70aaa2a74d619f687820799",
"assets/assets/icon.png": "ce2d1e555c7f5587873d147c06eecc76",
"assets/assets/images/bestfood/ic_best_food_1.jpeg": "642c886b5d7d8b8ff9e688b002f1ca66",
"assets/assets/images/bestfood/ic_best_food_10.jpeg": "2320a4844ba054be538c40e6862c169f",
"assets/assets/images/bestfood/ic_best_food_2.jpeg": "75274d964667aecc9ac8d076ac62e26d",
"assets/assets/images/bestfood/ic_best_food_3.jpeg": "688eb31885ddd522bb7d91b563bee160",
"assets/assets/images/bestfood/ic_best_food_4.jpeg": "fd96d2f14b1e2232597afbdbf0402785",
"assets/assets/images/bestfood/ic_best_food_5.jpeg": "28d5dd388994627e3cf2e5e88a48665f",
"assets/assets/images/bestfood/ic_best_food_6.jpeg": "6fb4d65f2b28d7545fd3ecb895af8941",
"assets/assets/images/bestfood/ic_best_food_7.jpeg": "671986b07138c07da9817dafb03127d9",
"assets/assets/images/bestfood/ic_best_food_8.jpeg": "5d428e7d169839845c6b7fe5941adb19",
"assets/assets/images/bestfood/ic_best_food_9.jpeg": "66a6104142e08b315579854324830d9a",
"assets/assets/images/menus/ic_account.png": "70c2ad64c6bc3c9b5400e762a54980a7",
"assets/assets/images/menus/ic_app_icon.png": "811a6b8913a0fb5094ca7baab43ef6f2",
"assets/assets/images/menus/ic_app_icon_black.png": "7a30dc878368216d4e74768d29e2864a",
"assets/assets/images/menus/ic_cart.png": "04674a5d16849561f89188eb724a5cec",
"assets/assets/images/menus/ic_credit_card.png": "b046ba8e2050ba8db86efd79aef29319",
"assets/assets/images/menus/ic_delete.png": "c8e38a93e1b0aa819ef9b7224c5f1f0c",
"assets/assets/images/menus/ic_food_express.png": "ff8daa08963a47aecce38d950457f756",
"assets/assets/images/menus/ic_home.png": "883c90129a1e79aa60d37cb66829a2a2",
"assets/assets/images/menus/ic_near_by.png": "6764f2d60c138b53a696da8a194c7292",
"assets/assets/images/menus/ic_search_menu.png": "18f941292522ceb64951157abb24f2f5",
"assets/assets/images/popular_foods/ic_popular_food_1.png": "604f1327a5c4f3c47957de9dd584cfe8",
"assets/assets/images/popular_foods/ic_popular_food_2.png": "c76484183aaa154b59d45af7728c5377",
"assets/assets/images/popular_foods/ic_popular_food_3.png": "9e1d95ab833ee4d1efe560a304f1e30f",
"assets/assets/images/popular_foods/ic_popular_food_4.png": "d3503f895d700633996bf89e2caeaa29",
"assets/assets/images/popular_foods/ic_popular_food_5.png": "db0398fa3040ca0c8b9574d5c5635dd2",
"assets/assets/images/popular_foods/ic_popular_food_6.png": "d981f47d57df38fd04aae8bafdeeda49",
"assets/assets/images/profileimg.jpeg": "b486d650ca71a219597584071f5888ed",
"assets/assets/images/topmenu/ic_burger.png": "2406bdef149efed8d0a70472f261fccd",
"assets/assets/images/topmenu/ic_cake.png": "68ca078aaf28ad7537eafae7f9871561",
"assets/assets/images/topmenu/ic_ice_cream.png": "0d02df9b6ca60e33a7ab1ad3f707c328",
"assets/assets/images/topmenu/ic_pasta.png": "ff3e6bbd0f46c7ba28becf250d1c6159",
"assets/assets/images/topmenu/ic_pizza.png": "d970ed0836334cb0ccea8f02125d8a84",
"assets/assets/images/topmenu/ic_soft_drink.png": "526cd712f0782c1c8b8fa7d9ac73e7be",
"assets/assets/images/topmenu/ic_sushi.png": "b4977c8006b2aa33576443e716d1c90c",
"assets/assets/indore.jpg": "adee4d060ff45d48694fbcfb2dc4e9a2",
"assets/assets/invitation%2520(1).png": "1e7426f79c3df8f911f03ee227682759",
"assets/assets/invitation.png": "f8c3f1b32d8c2210b9e7892b218ff9ab",
"assets/assets/iplay.jpg": "049f8820518b6f18d7f36329c297cb7e",
"assets/assets/jabalpur.jpg": "448fdaa9566b22e12b475bbf4fdf68f9",
"assets/assets/Kottayam.png": "703b4558206fca27e101f6ba0d869b17",
"assets/assets/libraries.jpg": "4844ddcb69359228ac3ce326373fee77",
"assets/assets/lines.png": "f1155aed35e1bf38940620c68472eafd",
"assets/assets/Login_Screen.png": "84214885e60d7c674fab498322557c91",
"assets/assets/lucknow2.png": "7f52b0353f27a678c2e68d28038559bf",
"assets/assets/Memberships_Screen.png": "36275fa53f1934a10a57b2c3b18fcd99",
"assets/assets/MetaVille.png": "d1cd3db9201bea888714720b920fb60c",
"assets/assets/mitsubishi.png": "2c126de3b8b5be8706794dc868f9496f",
"assets/assets/mumbai.jpg": "04c3ba30bbb45a9fbdd58f158aaa82de",
"assets/assets/My_Societies_Screen.png": "eecc2c1d892369805eb52bb40135672f",
"assets/assets/nec.png": "ebab87103b95cdeaef81afb573cd6bd2",
"assets/assets/Netverbatim_medium.ttf": "dde957f8f26ee1f90311076aa35ca86f",
"assets/assets/new%2520delhi.png": "5dd6fedb4ed9e210a18417d30548f09e",
"assets/assets/noodles.png": "8a9970889a500f537bfdb90ca3ed4ee7",
"assets/assets/order-food.png": "23e1729ee6cab20e1bb87ed8bc940b55",
"assets/assets/order.png": "45bbb2b940c648bc1c25b7e96e497c07",
"assets/assets/park.png": "9010bff9a76a30a409ebdf6c5be60c9d",
"assets/assets/party.png": "94237d19c1ba88b8f28a2956d4e76457",
"assets/assets/pattern.png": "de77348f747fda230521fe29d0589499",
"assets/assets/paymentbackground.png": "ebf64822df15ef0188a34342db789b85",
"assets/assets/pizza.png": "2c0f02a47e4a8763017aeb6bbe501c76",
"assets/assets/pool.png": "a4a60ae55d6d14a876c502057664d5c1",
"assets/assets/pp.jpg": "77c75200553b5beea9e33f268f584b17",
"assets/assets/pune.jpg": "9ff1c9ee613676634be0cdc5bedac7b2",
"assets/assets/pune.png": "22d6cfc4cf01bab5b80a65ab735e9ef2",
"assets/assets/qrcode.png": "f9de361477405c6b1c4f1385572e8dc5",
"assets/assets/Ranchi.jpg": "1cfc2ad7425bb45ef5c4100fbc63278d",
"assets/assets/ranchi.png": "4c9be9527438cc5d47bf11d8f8886044",
"assets/assets/sandwich.png": "30e2e420da80702423cf960771c2e62d",
"assets/assets/security.png": "c7051e66ba0a67aea0f5c718cbc10436",
"assets/assets/shimala.jpg": "31fc47769299e907b32013bd517a31f3",
"assets/assets/shopping.png": "dc92c464380410a1866fb6dfa20d61d6",
"assets/assets/shoppingcard.jpg": "75b0232fbbb8b402b17cad7c21f70de4",
"assets/assets/slpashh.JPG": "cc8ac1394fd624d3ff9b8ac1c3c60636",
"assets/assets/spa_gc.jpg": "8d4aa8fed18bd65b592338dfee3477ca",
"assets/assets/splash.JPG": "f74ee36771b5886e7cb87a1be8d5c867",
"assets/assets/success.png": "bda6701fefe6882e1f25b6be0eb341a0",
"assets/assets/swimming.jpg": "269cca6a8cfae210617b8aa0319e21a0",
"assets/assets/tennis.jpg": "5a848944b42da3172549300677f6dc63",
"assets/assets/The-Beach.jpg": "cd5889b12082e30e431cf7f4c3e89dac",
"assets/assets/TheBeach.jpg": "9bf6658231368dcc69d02898067d1761",
"assets/assets/timberhills.jpg": "010e9288e6800db61a2c4952079507d8",
"assets/assets/Treetops.jpg": "c4174c2ce52e6ed6c5caf41e1e0ff0a2",
"assets/assets/Treetops1.jpg": "c4174c2ce52e6ed6c5caf41e1e0ff0a2",
"assets/assets/twitter.png": "dc03ca45b4d8bf8cd28cc70151adb2b8",
"assets/assets/ujjain.jpg": "af3dd006a02e87932707ae0b385ca2d3",
"assets/assets/unwind.jpg": "bb68c021de3a04fbd53abc430de6984f",
"assets/assets/upcoming.png": "1ef26329567f8096a146fb89636cd650",
"assets/assets/upcoming2.jpg": "a9e6962f7bcdd168670044d55d158132",
"assets/assets/varanasi.jpg": "b2dc850994c7d29c22bcbb674aadbd24",
"assets/assets/varanda.jpg": "eb5cfdf3ea888971a2a08506ee2d9d81",
"assets/assets/vintage_lounge.jpg": "1d8a5dd5a8ee282364266ee53e7f96ed",
"assets/assets/Visitors_Screen.gif": "932f949e1bdcb6b5125fee9411930ae1",
"assets/assets/wrap.png": "8bda92ea1e9a88187033aaf6939755ac",
"assets/FontManifest.json": "d3a75a5953ea61dbd2a719007ec9e7df",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/NOTICES": "ee1fc417557f997932497d9d778d19a1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_icons/fonts/AntDesign.ttf": "3a2ba31570920eeb9b1d217cabe58315",
"assets/packages/flutter_icons/fonts/Entypo.ttf": "744ce60078c17d86006dd0edabcd59a7",
"assets/packages/flutter_icons/fonts/EvilIcons.ttf": "140c53a7643ea949007aa9a282153849",
"assets/packages/flutter_icons/fonts/Feather.ttf": "6beba7e6834963f7f171d3bdd075c915",
"assets/packages/flutter_icons/fonts/FontAwesome.ttf": "b06871f281fee6b241d60582ae9369b9",
"assets/packages/flutter_icons/fonts/FontAwesome5_Brands.ttf": "c39278f7abfc798a241551194f55e29f",
"assets/packages/flutter_icons/fonts/FontAwesome5_Regular.ttf": "f6c6f6c8cb7784254ad00056f6fbd74e",
"assets/packages/flutter_icons/fonts/FontAwesome5_Solid.ttf": "b70cea0339374107969eb53e5b1f603f",
"assets/packages/flutter_icons/fonts/Foundation.ttf": "e20945d7c929279ef7a6f1db184a4470",
"assets/packages/flutter_icons/fonts/Ionicons.ttf": "b2e0fc821c6886fb3940f85a3320003e",
"assets/packages/flutter_icons/fonts/MaterialCommunityIcons.ttf": "3c851d60ad5ef3f2fe43ebd263490d78",
"assets/packages/flutter_icons/fonts/MaterialIcons.ttf": "a37b0c01c0baf1888ca812cc0508f6e2",
"assets/packages/flutter_icons/fonts/Octicons.ttf": "73b8cff012825060b308d2162f31dbb2",
"assets/packages/flutter_icons/fonts/SimpleLineIcons.ttf": "d2285965fe34b05465047401b8595dd0",
"assets/packages/flutter_icons/fonts/weathericons.ttf": "4618f0de2a818e7ad3fe880e0b74d04a",
"assets/packages/flutter_icons/fonts/Zocial.ttf": "5cdf883b18a5651a29a4d1ef276d2457",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_AMS-Regular.ttf": "657a5353a553777e270827bd1630e467",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Bold.ttf": "a9c8e437146ef63fcd6fae7cf65ca859",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Regular.ttf": "7ec92adfa4fe03eb8e9bfb60813df1fa",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Bold.ttf": "46b41c4de7a936d099575185a94855c4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Regular.ttf": "dede6f2c7dad4402fa205644391b3a94",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Bold.ttf": "9eef86c1f9efa78ab93d41a0551948f7",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-BoldItalic.ttf": "e3c361ea8d1c215805439ce0941a1c8d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Italic.ttf": "ac3b1882325add4f148f05db8cafd401",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Regular.ttf": "5a5766c715ee765aa1398997643f1589",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-BoldItalic.ttf": "946a26954ab7fbd7ea78df07795a6cbc",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-Italic.ttf": "a7732ecb5840a15be39e1eda377bc21d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Bold.ttf": "ad0a28f28f736cf4c121bcb0e719b88a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Italic.ttf": "d89b80e7bdd57d238eeaa80ed9a1013a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Regular.ttf": "b5f967ed9e4933f1c3165a12fe3436df",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Script-Regular.ttf": "55d2dcd4778875a53ff09320a85a5296",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size1-Regular.ttf": "1e6a3368d660edc3a2fbbe72edfeaa85",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size2-Regular.ttf": "959972785387fe35f7d47dbfb0385bc4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size3-Regular.ttf": "e87212c26bb86c21eb028aba2ac53ec3",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size4-Regular.ttf": "85554307b465da7eb785fd3ce52ad282",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Typewriter-Regular.ttf": "87f56927f1ba726ce0591955c8b3b42d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b37ae0f14cbc958316fac4635383b6e8",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5178af1d278432bec8fc830d50996d6f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "aa1ec80f1b30a51d64c72f669c1326a7",
"assets/packages/line_awesome_flutter/lib/fonts/LineAwesome.ttf": "bcc78af7963d22efd760444145073cd3",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "b39520e2b59c03a256b1b3619c60a9e8",
"/": "b39520e2b59c03a256b1b3619c60a9e8",
"main.dart.js": "19e43652b15c5f9d54ea99798104738d",
"manifest.json": "0abd968dc8b595b742f880c81652a27f",
"version.json": "27ccb16e4e287644dd2aa15d32634116"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
