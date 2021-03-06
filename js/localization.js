﻿var localized_strings,
localization_promise = (function (){
    var deferred = new $.Deferred();
    localized_strings_default = {
      		empty_wishlist: "Empty Wishlist",
    		purchase_date: "(Purchased __date__)",
        	options: "Options",
        	website: "Website",
        	contribute: "Contribute (GitHub)",
		store: "Store",
		library_menu: "Library",
		community: "Community",
		news: "News",
		about: "About",
		donate: "Donate",
		language: "Language",
		highlight: "Highlight",
		options_owned: "Items You Own",
		options_wishlist: "Items On Your Wishlist",
		options_coupon: "Items With Coupons",
		options_gift: "Items Stored As Gift",
		options_guest: "Items You Have A Guest Pass For",
		options_friends_wishlist: "Items Your Friends Have Wishlisted",
		options_hide_install: "Hide \"Install Steam\" button in header",
		options_drm: "Show 3rd Party DRM Warnings",
		options_lowestprice: "Show Price History Information",
		options_metacritic: "Show Metacritic User Scores",
		options_steamdb: "Show SteamDB Links",
		options_wsgf: "Show WSGF (Widescreen) Info",
		options_carousel_description: "Show App Descriptions On Storefront Carousel",
		options_profile_links: "Show profile links to",
		options_total_spent: "Show \"Total Spent\" on Account Page",
		options_group_events: "Show Events on Group Overview",
		options_greenlight_banner: "Replace Steam Greenlight Banner",
		options_steamcardexchange: "Show SteamCardExchange links on badges",
		options_es_bg: "Set Custom Background on Edit Profile Screen",
		options_market_total: "Show Transaction Summary on Market",
		options_library: "Show Library button in header (BETA)",
		options_library_f2p: "Show played free to play games and demos in library",
		options_hide_about: "Hide About link in header",
		options_about_text: "About <a href='http://www.enhancedsteam.com' style='color:#8bc53f;'>Enhanced Steam</a>:<p>Enhanced Steam is an Extension for Google Chrome that adds many new features to the Steam website.<p>Features include:<ul><li>Highlighting games you already own</li><li>Highlighting games on your wishlist</li><li>Correctly calculating bundle discounts based on games you already own</li><li>Showing you how much money you've spent on Steam for the lifetime of your account</li><li>Highlighting DLC you own on a game page</li><li>Fixing \"No Image Available\" game icons on your wishlist for any game or DLC</li><li>Pointing out titles with 3rd party DRM</li></ul><p>If you find this Extension useful, please consider donating.",
		tag: "Tag",
		theworddefault: "Default",
		save: "Save",
		saved: "Saved",
		remove: "Remove",
		view_in: "View in",
  		clear_cache: "Clear cached data",
        	forums: "Forums",
        	coupon_available: "You have a coupon available!",
        	coupon_application_note: "A coupon in your inventory will be applied automatically at checkout.",
        	coupon_learn_more: "<a href=\"https://support.steampowered.com/kb_article.php?ref=4210-YIPC-0275\">Learn more</a> about Steam Coupons",
        	add_to_cart: "Add to Cart",
        	add_unowned_dlc_to_cart: "Add unowned DLC to cart",
        	drm_third_party: "Warning: This title uses 3rd party DRM",
        	empty_cart: "Empty Cart",
        	events_view_all: "VIEW ALL",
        	events: "Events",
        	dlc_data_header: "Downloadable Content Details",
        	tag_owned: "Owned",
        	tag_wishlist: "Wishlist",
        	tag_coupon: "Coupon",
        	tag_inv_gift: "Gift",
        	tag_inv_guestpass: "Guestpass",
        	tag_friends_want: "<a href=\"http://steamcommunity.com/my/friendsthatplay/__appid__\">__friendcount__ wish for</a>",
		inventory_market_text: "Show Market Price on Inventory Page (Experimental!)",
		credits: "Credits",
		stores: "Stores",
		all: "All",
		programming: "Programming",
		translation: "Translation",
		custom_background: "Custom Background",
		custom_background_help: "All users of Enhanced Steam will see this background on your profile.  Non-Enhanced Steam users will see your regular profile background.",
		total_size: "Total Size",
		hide: "Hide",
		store_transactions: "Store Transactions",
		game_transactions: "Game Transactions",
		market_transactions: "Market Transactions",
		total_spent: "Total Spent",
		historical_low: "Historical Low",
		lowest_price: "Lowest Price",
		card_drops_remaining: "__drops__ card drops remaining.",
		sales_total: "Sales total",
		purchase_total: "Purchase total",
		net_gain: "Net gain",
		net_spent: "Net spent",
		library: {
			private_profile: "Change your profile status to public <a href='http://steamcommunity.com/my/edit/settings'>in your settings</a> to use this feature."
		}
    };

    localized_strings = {
        "en": 	localized_strings_default,
        "cs":   {
        	empty_wishlist: "Vyprázdnit Seznam přání",
        	purchase_date: "(Zakoupeno __date__)",
        	options: "Nastavení",
        	website: "Webová stránka",
        	contribute: "Pomoct (GitHub)",
		store: "Obchod",
		community: "Komunita",
		news: "Novinky",
		about: "O rozšíření",
		donate: "Přispět",
		language: "Jazyk",
		highlight: "Zvýraznění",
		options_owned: "Položky, které vlastníte",
		options_wishlist: "Položky na vašem Seznamu přání",
		options_coupon: "Položky s kupóny",
		options_gift: "Položky vlastněné jako dárek",
		options_guest: "Položky, na které máte Guest Pass",
		options_friends_wishlist: "Položky, které mají vaši přátelé na svém Seznamu přání",
		options_hide_install: "Schovat tlačítko \"Nainstalovat Steam\" v hlavičce",
		options_drm: "Ukázat upozornění na DRM třetí strany",
		options_lowestprice: "Ukázat informace o historii ceny",
		options_metacritic: "Ukázat uživatelská hodnocení Metacritic",
		options_steamdb: "Ukázat odkazy na SteamDB",
		options_wsgf: "Ukázat WSGF (širokoúhlé) informace",
		options_carousel_description: "Ukázat popis aplikace na slideshow na stránce Obchod",
		options_profile_links: "Ukázat odkazy na profil na:",
		options_total_spent: "Ukázat \"Celkem utraceno\" na stránce Účet",
		options_group_events: "Ukázat události na Přehledu skupiny",
		options_greenlight_banner: "Nahradit Steam Greenlight banner",
		options_steamcardexchange: "Ukázat odkazy na SteamCardExchange u odznaků",
		options_es_bg: "Možnost nastavit Vlastní pozadí na stránce Upravit profil",
		options_library: "Ukázat tlačítko Knihovna v hlavičce (BETA)",
		options_library_f2p: "Ukázat hrané free to play hry a dema v knihovně",
		options_hide_about: "Schovat odkaz O Steamu v hlavičce",
		options_about_text: "O <a href='http://www.enhancedsteam.com' style='color:#8bc53f;'>Enhanced Steam</a>:<p>Enhanced Steam je rozšíření pro Google Chrome, které přidává mnoho nových funkcí na webovou stránku Steamu.<p>Mezi funkce patří:<ul><li>Zvýraznění již vlastněných her</li><li>Zvýraznění her na Vašem Seznamu přání</li><li>Přesné spočítaní slev u balíčků založené na hrách, které již vlastníte</li><li>Ukázání, kolik jste na Steamu utratili od založení Vašeho účtu</li><li>Zvýraznění DLC, které již vlastníte, na stránce hry</li><li>Spravení \"No Image Available\" ikon her na vašem Seznamu přání pro každou hru i DLC</li><li>Upozornění na hry s DRM třetí strany</li></ul><p>Pokud vám toto rozšíření přijde užitečné, prosím popřemýšlejte o příspěvku.",
		tag: "Popisek",
		theworddefault: "Výchozí",
		save: "Uložit",
		saved: "Uloženo",
		view_in: "Ukázat v",
    		clear_cache: "Vyčistit data uložená v mezipaměti",
        	forums: "Fóra",
        	coupon_available: "Máte dostupný kupón!",
        	coupon_application_note: "Kupón ve vašem inventáři bude automaticky aplikován při nákupu.",
     	  	coupon_learn_more: "<a href=\"https://support.steampowered.com/kb_article.php?ref=4210-YIPC-0275\">Zjistěte více</a> o Steam kupónech",
        	add_to_cart: "Přidat do košíku",
        	drm_third_party: "Upozornění: Tento titul používá DRM třetí strany",
        	empty_cart: "Vyprázdnit košík",
        	events_view_all: "ZOBRAZIT VŠE",
        	events: "Události",
        	dlc_data_header: "Detaily Stahovatelného obsahu",
        	tag_owned: "Vlastněné",
        	tag_wishlist: "Na Seznamu přání",
        	tag_coupon: "S kupónem",
        	tag_inv_gift: "Vlastněný dárek",
        	tag_inv_guestpass: "Vlastněný Guest Pass",
        	tag_friends_want: "<a href=\"http://steamcommunity.com/my/friendsthatplay/__appid__\">__friendcount__ si toto přejí</a>",
		inventory_market_text: "Ukázat cenu v Tržišti na stránce Inventář (Experimentální!)",
		credits: "Autoři",
		stores: "Obchody",
		all: "Vše",
		programming: "Programování",
		translation: "Překlad",
		custom_background: "Vlastní pozadí",
		custom_background_help: "Všichni uživatelé Enhanced Steam uvidí toto pozadí na vašem profilu.  Uživatelé bez Enhanced Steam uvidí vaše normální pozadí profilu.",
		total_size: "Celková velikost",
		hide: "Schovat",
		card_drops_remaining: "Zbývá __drops__ přídělů karet.",
		library: {
			private_profile: "Pro použití této funkce musíte změnit svůj stav profilu na veřejný <a href='http://steamcommunity.com/my/edit/settings'>ve vašem nastavení</a>."
		}
     		},
        "de":   {
		empty_wishlist: "Wunschliste leeren",
		purchase_date: "(Auf __date__ gekauft)",
		options: "Optionen",
		website: "Website",
		contribute: "Unterstützen (GitHub)",
		store: "Shop",
		community: "Community",
		news: "News",
		about: "Über",
		donate: "Spenden",
		language: "Sprache",
		highlight: "Hervorheben",
		options_owned: "Titel in meinem Besitz",
		options_wishlist: "Titel auf meiner Wunschliste",
		options_coupon: "Titel, für welche ich einen Gutschein habe",
		options_gift: "Titel, die als Geschenk in meinem Inventar liegen",
		options_guest: "Titel, die als Besucherpass in meinem Inventar liegen",
		options_friends_wishlist: "Titel, welche sich Freunde wünschen",
		options_hide_install: "Verstecke \"Steam installieren\" Button im Seitenkopf",
		options_drm: "Zeige Warnung über DRMs von Dritten",
		options_lowestprice: "Zeige Informationen über Preishistorie",
		options_metacritic: "Zeige Metacritic Benutzerbewertungen",
		options_steamdb: "Zeige SteamDB Links",
		options_wsgf: "Zeige WSGF (Widescreen) Info",
		options_carousel_description: "Zeige Titelbeschreibungen im Karusell auf der Shop-Startseite",
		options_profile_links: "Zeige Profillinks zu",
		options_total_spent: "Zeige \"Ausgaben Gesamt\" in Accountdetails",
		options_group_events: "Zeige Events in Gruppenübersicht",
		options_greenlight_banner: "Überschreibe Greenlight Banner",
		tag: "Markieren",
		theworddefault: "Standard",
		save: "Speichern",
		saved: "Gespeichert",
		view_in: "In ansehen",
		clear_cache: "Gecachte Daten löschen",
		forums: "Foren",
		coupon_available: "<font size=5>Sie haben einen Gutschein zur Verfügung!</font>",
		coupon_application_note: "Ein Gutschein aus Ihrem Inventar wird automatisch im Warenkorb angewendet.",
		coupon_learn_more: "<a href=\"https://support.steampowered.com/kb_article.php?ref=4210-YIPC-0275\">Mehr über Steam Gutscheine lernen</a>",
		add_to_cart: "In den Warenkorb",
		drm_third_party: "Achtung: Dieser Titel nutzt ein DRM von Dritten",
		empty_cart: "Warenkorb leeren",
		events_view_all: "ALLE ANZEIGEN",
		events: "Events",
		dlc_data_header: "Details über Inhalte zum Herunterladen",
		tag_owned: "Bereits im Besitz",
		tag_wishlist: "Wunschliste",
		tag_coupon: "Gutschein",
		tag_inv_gift: "Geschenk",
		tag_inv_guestpass: "Besucherpass",
		tag_friends_want: "<a href=\"http://steamcommunity.com/my/friendsthatplay/__appid__\">__friendcount__ mal gewünscht</a>"
		},
        "sp":   {
			empty_wishlist: "Vacíar Lista de Deseos",
			purchase_date: "(Comprado el __date__)",
			options: "Opciones",
			website: "Página Web",
			contribute: "Contribuir (GitHub)",
			store: "Tienda",
			community: "Comunidad",
			news: "Noticias",
			about: "Sobre",
			donate: "Donar",
			language: "Idioma",
			highlight: "Destacar",
			options_owned: "Artículos que posees",
			options_wishlist: "Artículos en tu lista de deseados",
			options_coupon: "Artículos con cupones",
			options_gift: "Artículos que posees como regalo",
			options_guest: "Artículos que posees un pase de invitado",
			options_friends_wishlist: "Artículos que tus amigos tienen en su lista de deseados",
			options_hide_install: "Ocultar Botón de \"Install Steam\" en el encabezado",
			options_drm: "Mostrar advertencias de DRM de terceros",
			options_lowestprice: "Mostrar historial de precios",
			options_metacritic: "Mostrar puntuaciones de los usuarios de Metacritic",
			options_steamdb: "Mostrar enlaces a SteamDB",
			options_wsgf: "Mostrar información WSGF (Widescreen)",
			options_carousel_description: "Mostrar información de la aplicación en el slider de la página principal",
			options_profile_links: "Mostrar enlaces en el perfil a",
			options_total_spent: "Mostrar \"Total Gastado\" en Detalles de la cuenta",
			options_group_events: "Mostrar eventos en el resumen de grupos",
			options_greenlight_banner: "Reemplazar Banner de Steam Greenlight",
			options_es_bg: "Establecer fondo personalizado en la edición de perfil",
			options_library: "Motrar botón de \"Librería\" en el encabezado (BETA)",
			options_hide_about: "Ocultar botón \"Acerca de\" en el encabezado",
			options_about_text: "Acerca de <a href='http://www.enhancedsteam.com' style='color:#8bc53f;'>Enhanced Steam</a>:<p>Enhanced Steam es una Extensión para Google Chrome que agrega un montón de nuevas características a la página de Steam.<p>Características Incluidas:<ul><li>Resaltar juegos que ya posees</li><li>Resaltar juegos de tu lista de deseados</li><li>Cálculos correctos de los descuentos de los paquetes basado en los juegos que ya posees</li><li>Mostrarte cuanto dinero gastaste en Steam en la vida de tu cuenta</li><li>Resaltar DLC que ya posees</li><li>Arreglar \"No Image Available\" en juegos o DLC de tu lista de deseados</li><li>Advertirte de titulos con DRM de terceros</li></ul><p>Si encuentras esta Extensión útil, por favor considera una donación.",
			tag: "Etiqueta",
			theworddefault: "Por Defecto",
			save: "Guardar",
			saved: "Guardado",
			view_in: "Ver en",
			clear_cache: "Borrar datos del caché",
			forums: "Foros",
			coupon_available: "¡Usted tiene un cupón disponible!",
			coupon_application_note: "Un cupón en su inventario se aplicará automáticamente al momento de pagar.",
			coupon_learn_more: "<a href=\"https://support.steampowered.com/kb_article.php?ref=4210-YIPC-0275\">Mas información</a> sobre cupones de Steam",
			add_to_cart: "Anadir al carro",
			drm_third_party: "ATENCIÓN: Este título utiliza DRM de terceros",
			empty_cart: "Vaciar Carro",
			events_view_all: "VER TODOS",
			events: "Eventos",
			dlc_data_header: "Detalles del Contenido Descargable",
			tag_owned: "Comprado",
			tag_wishlist: "Lista de deseados",
			tag_coupon: "Cupón",
			tag_inv_gift: "Regalo",
			tag_inv_guestpass: "Pase de Invitado",
			tag_friends_want: "<a href=\"http://steamcommunity.com/my/friendsthatplay/__appid__\">__friendcount__ amigos lo desean</a>",
			inventory_market_text: "Mostrar Precios del Mercado en la Página del Inventario (Experimental)",
			credits: "Créditos",
			stores: "Tiendas",
			all: "Todo",
			programming: "Programación",
			translation: "Traducción",
			custom_background: "Ocultar fondo",
			custom_background_help: "Todos los usuarios de Enhanced Steam verán este fondo en tu perfil.  Usuarios que no usen Enhanced Steam verán tu fondo regular.",
			total_size: "Tamaño Total",
			hide: "Ocultar"
		},
        "fr":   {
			empty_wishlist: "Vider la liste de souhaits",
			purchase_date: "(Acheté le __date__)",
			options: "Options",
			website: "Site web",
			contribute: "Contribuer (GitHub)",
			store: "Magasin",
			library_menu: "Bibliothèque",
			community: "Communauté",
			news: "Actualités",
			about: "À propos",
			donate: "Faire un don",
			language: "Langue",
			highlight: "Surlignage",
			options_owned: "Articles que vous possédez",
			options_wishlist: "Articles dans votre liste de souhaits",
			options_coupon: "Articles pour lesquels vous avez des coupons",
			options_gift: "Articles stockés en tant que cadeaux",
			options_guest: "Articles pour lesquels vous avez des invitations",
			options_friends_wishlist: "Articles que vos amis ont dans leurs listes de souhaits",
			options_hide_install: "Cacher le bouton \"Installer Steam\" dans l'en-tête",
			options_drm: "Afficher les avertissements sur les DRMs de tiers",
			options_lowestprice: "Afficher l'historique des prix",
			options_metacritic: "Afficher les scores des utilisateurs de Metacritic",
			options_steamdb: "Afficher les liens SteamDB",
			options_wsgf: "Afficher les informations WSGF (écran large)",
			options_carousel_description: "Afficher les descriptions des apps dans le carrousel du magasin",
			options_profile_links: "Afficher les liens de profil de ",
			options_total_spent: "Afficher \"Total dépensé\" dans la page du compte",
			options_group_events: "Afficher les événements dans l'aperçu des groupes",
			options_greenlight_banner: "Remplacer la bannière Steam Greenlight",
			options_steamcardexchange: "Afficher le lien SteamCardExchange sur les badges",
			options_es_bg: "Définir un arrière-plan personnalisé sur la page de modification du profil",
			options_market_total: "Afficher un récapitulatif des transactions sur le Marché",
			options_library: "Afficher le bouton Bibliothèque dans l'en-tête (BETA)",
			options_library_f2p: "Afficher les jeux gratuits auquels vous avez joué et les démos dans la bibliothèque",
			options_hide_about: "Cacher le lien À propos dans l'en-tête",
			options_about_text: "À propos d'<a href='http://www.enhancedsteam.com' style='color:#8bc53f;'>Enhanced Steam</a> :<p>Enhanced Steam est une extension pour Google Chrome qui ajoute de nombreuses nouvelles fonctionnalités pour le site de Steam.<p>Caractéristiques incluses :<ul><li>Le surlignage des jeux que vous possédez déjà</li><li>Le surlignage des jeux dans votre liste de souhaits</li><li>Le calcul correct des remises de pack basé sur les jeux que vous possédez déjà</li><li>L'affichage de l'argent que vous avez dépensé sur Steam pour la durée de vie de votre compte</li><li>Le surlignage des DLCs que vous possédez sur la page du jeu</li><li>La correction du \"No Image Available\" des icones de jeu dans votre liste de souhaits pour n'importe quel jeu ou DLC</li><li>L'affichage des titres avec des DRMs de tiers</li></ul><p>Si vous trouvez cette extension utile, veuillez envisager de faire don.",
			tag: "Tag",
			theworddefault: "Défaut",
			save: "Enregistrer",
			saved: "Enregistré",
			view_in: "Voir sur",
			clear_cache: "Vider le cache de données",
			forums: "Forums",
			coupon_available: "Vous avez un coupon disponible !",
			coupon_application_note: "Un coupon de votre inventaire sera utilisé automatiquement dans le panier.",
			coupon_learn_more: "<a href=\"https://support.steampowered.com/kb_article.php?ref=4210-YIPC-0275\">En savoir plus</a> sur les Coupons Steam",
			add_to_cart: "Ajouter au panier",
			add_unowned_dlc_to_cart: "Ajouter les DLCs non-possédés au panier",
			drm_third_party: "Attention : ce titre utilise le DRM d'un tiers",
			empty_cart: "Vider le panier",
			events_view_all: "TOUT AFFICHER",
			events: "Événements",
			dlc_data_header: "Détails sur le contenu téléchargeable",
			tag_owned: "Possédé",
			tag_wishlist: "Liste de souhaits",
			tag_coupon: "Coupon",
			tag_inv_gift: "Cadeau",
			tag_inv_guestpass: "Invitation",
			tag_friends_want: "<a href=\"http://steamcommunity.com/my/friendsthatplay/__appid__\">__friendcount__ souhait(s)</a>",
			inventory_market_text: "Afficher le prix du marché sur la page d'inventaire (expérimental !)",
			credits: "Crédits",
			stores: "Magasins",
			all: "Tous",
			programming: "Programmation",
			translation: "Traduction",
			custom_background: "Arrière-plan personnalisé",
			custom_background_help: "Tous les utilisateurs d'Enhanced Steam verront cet arrière-plan sur votre profil.  Les autres utilisateurs verront votre arrière-plan de profil standard.",
			total_size: "Taille totale",
			hide: "Cacher",
			store_transactions: "Transactions dans le magasin",
			game_transactions: "Transactions dans les jeux",
			market_transactions: "Transactions dans le marché",
			total_spent: "Total dépensé",
			historical_low: "Creux historique",
			lowest_price: "Prix le plus bas",
			card_drops_remaining: "__drops__ carte(s) restante(s).",
			sales_total: "Ventes totales",
			purchase_total: "Achats totaux",
			net_gain: "Bénéfice net",
			net_spent: "Dépense nette",
			library: {
				private_profile: "Changez le statut de votre profil pour public <a href='http://steamcommunity.com/my/edit/settings'>dans vos paramètres</a> pour utiliser cette fonctionnalité."
			}
      	},
        "it":   {
      		empty_wishlist: "Svuota lista",
    		purchase_date: "(Acquistato il __date__)",
        	options: "Opzioni",
        	website: "Sito web",
        	contribute: "Contributi (GitHub)",
		store: "Negozio",
		library_menu: "Libreria",
		community: "Comunità",
		news: "Notizie",
		about: "Informazioni",
		donate: "Donazioni",
		language: "Lingua",
		highlight: "Evidenzia",
		options_owned: "Giochi che possiedi",
		options_wishlist: "Giochi in lista dei desideri",
		options_coupon: "Giochi con coupon",
		options_gift: "Giochi posseduti come gift",
		options_guest: "Giochi per i quali hai un Pass ospite",
		options_friends_wishlist: "Giochi che desiderano i tuoi amici",
		options_hide_install: "Nascondi il pulsante \"Installa Steam\" ",
		options_drm: "Mostra avvisi per i DRM di terze parti",
		options_lowestprice: "Mostra lo storico dei prezzi",
		options_metacritic: "Mostra i voti degli utenti Metacritic",
		options_steamdb: "Mostra link a SteamDB",
		options_wsgf: "Mostra informazioni WSGF (Widescreen)",
		options_carousel_description: "Mostra descrizioni nello slider della homepage",
		options_profile_links: "Mostra i seguenti link nel profilo",
		options_total_spent: "Mostra \"Spesa totale\" in Dettagli dell'account",
		options_group_events: "Mostra Eventi nella Panoramica del gruppo",
		options_greenlight_banner: "Sostituisci banner di Greenlight",
		options_steamcardexchange: "Mostra link di SteamCardExchange in Medaglie",
		options_es_bg: "Imposta sfondo personalizzato in Modifica profilo",
		options_library: "Mostra pulsante \"Libreria\" (BETA)",
		options_library_f2p: "Mostra demo e free-to-play giocati nella Libreria",
		options_hide_about: "Nascondi pulsante \"Informazioni\"",
		options_about_text: "Informazioni su <a href='http://www.enhancedsteam.com' style='color:#8bc53f;'>Enhanced Steam</a>:<p>Enhanced Steam è un'estensione per Google Chrome che aggiunge molte nuove funzioni al sito web di Steam.<p>Caratteristiche:<ul><li>Evidenzia i giochi che possiedi</li><li>Evidenzia i giochi che desideri</li><li>Calcola gli sconti sui bundle in base ai giochi che già possiedi</li><li>Mostra i soldi spesi in totale sul tuo account di Steam</li><li>Evidenzia i DLC posseduti nella pagina del gioco</li><li>Corregge bug dell'icona \"No Image Available\" nella Lista desideri per giochi e DLC</li><li>Mostra avvisi quando sono presenti DRM di terze parti</li></ul><p>Se trovi utile questa estensione, considera di fare una donazione.",
		tag: "Tag",
		theworddefault: "Default",
		save: "Salva",
		saved: "Salvato",
		view_in: "Mostra in",
  		clear_cache: "Elimina cache",
        	forums: "Forums",
        	coupon_available: "Hai un coupon a disposizione!",
        	coupon_application_note: "Un coupon presente nel tuo inventario verrà utilizzato al momento del pagamento.",
        	coupon_learn_more: "<a href=\"https://support.steampowered.com/kb_article.php?ref=4210-YIPC-0275\">Informazioni</a> sui coupon di Steam",
        	add_to_cart: "Aggiungi al carrello",
        	add_unowned_dlc_to_cart: "Aggiungi DLC non posseduti al carrello",
        	drm_third_party: "Attenzione: Questo titolo utilizza DRM di terze parti",
        	empty_cart: "Svuota il carrello",
        	events_view_all: "MOSTRA TUTTO",
        	events: "Eventi",
        	dlc_data_header: "Dettagli DLC",
        	tag_owned: "Posseduti",
        	tag_wishlist: "Lista dei desideri",
        	tag_coupon: "Coupon",
        	tag_inv_gift: "Gift",
        	tag_inv_guestpass: "Pass ospite",
        	tag_friends_want: "<a href=\"http://steamcommunity.com/my/friendsthatplay/__appid__\">__friendcount__ amici lo vogliono</a>",
		inventory_market_text: "Mostra prezzo del Mercato nell'inventario (Experimental!)",
		credits: "Crediti",
		stores: "Negozi",
		all: "All",
		programming: "Programmazione",
		translation: "Traduzione",
		custom_background: "Sfondo personalizzato",
		custom_background_help: "Tutti gli utenti di Enhanced Steam vedranno questo sfondo sul tuo profilo. Gli altri vedranno il tuo sfondo normale.",
		total_size: "Dimensione totale",
		hide: "Nascondi",
		store_transactions: "Transazioni sullo store",
		game_transactions: "Transazioni in-game",
		market_transactions: "Transazioni sul Mercato",
		total_spent: "Totale spese",
		historical_low: "Più basso in assoluto",
		lowest_price: "Prezzo più basso",
		card_drops_remaining: "__drops__ carte ancora da trovare.",
		library: {
			private_profile: "Imposta lo stato del profilo su Pubblico in <a href='http://steamcommunity.com/my/edit/settings'>Modifica Profilo</a> per utilizzare questa funzione."
		}
        },
        "ja":   {
		empty_wishlist: "ウィッシュリストを空にする",
		purchase_date: "(購入日 __date__)",
		options: "オプション",
		website: "ウェブサイト",
		contribute: "貢献する (GitHub)",
		store: "ストア",
		community: "コミュニティ",
		news: "ニュース",
		about: "これについて",
		donate: "寄付",
		language: "言語",
		highlight: "強調表示",
		options_owned: "所有しているもの",
		options_wishlist: "ウィッシュリストにあるもの",
		options_coupon: "クーポンがあるもの",
		options_gift: "ギフトで保管しているもの",
		options_guest: "ギフトパスがあるもの",
		options_friends_wishlist: "フレンドがウィッシュリストに入れているもの",
		options_hide_install: "ヘッダーの\"Steamをインストール\"ボタンを隠す",
		options_drm: "サードパーティーのDRMの警告を表示",
		options_lowestprice: "価格履歴情報を表示",
		options_metacritic: "Metacriticのユーザースコアを表示",
		options_steamdb: "SteamDBへのリンクを表示",
		options_wsgf: "WSGF (ワイドスクリーン) 情報を表示",
		options_carousel_description: "ストアトップのカルーセルのアプリ説明を表示",
		options_profile_links: "プロフィールに以下へのリンクを表示",
		options_total_spent: "アカウントページに\"合計消費額\"を表示",
		options_group_events: "グループオーバービューでイベントを表示",
		options_greenlight_banner: "Steam Greenlightのバナーを置き換える",
		tag: "タグ",
		theworddefault: "デフォルト",
		save: "保存",
		saved: "保存完了",
		view_in: "次で表示",
		clear_cache: "キャッシュされたデータをクリア",
		forums: "Forums",
		coupon_available: "クーポンが利用できます!",
		coupon_application_note: "インベントリにあるクーポンは支払い時に自動的に適用されます。",
		coupon_learn_more: "クーポンについて<a href=\"https://support.steampowered.com/kb_article.php?ref=4210-YIPC-0275\">詳細を学ぶ</a>",
		add_to_cart: "Add to Cart",
		drm_third_party: "警告: このタイトルはサードパーティーのDRMを使用します",
		empty_cart: "カートを空にする",
		events_view_all: "すべて表示",
		events: "イベント",
		dlc_data_header: "ダウンロードコンテンツの詳細",
		tag_owned: "所持",
		tag_wishlist: "ウィッシュリスト",
		tag_coupon: "クーポン",
		tag_inv_gift: "ギフト",
		tag_inv_guestpass: "ゲストパス",
		tag_friends_want: "<a href=\"http://steamcommunity.com/my/friendsthatplay/__appid__\">__friendcount__ 人が欲しがっています</a>",
		inventory_market_text: "インベントリ上でマーケットの価格を表示 (実験的!)",
		credits: "クレジット",
		stores: "ストア",
		all: "全て",
		programming: "プログラミング",
		translation: "翻訳"
		},
        "nl":   {
           	empty_wishlist: "Verlanglijst leegmaken",
            	purchase_date: "(Gekocht op __date__)",
            	options: "Opties",
            	website: "Website",
            	contribute: "Bijdragen (GitHub)",
            	clear_cache: "Gecachete data verwijderen",
            	forums: "Forums",
            	coupon_available: "Je hebt een waardebon beschikbaar!",
            	coupon_application_note: "Een coupon in je inventaris wordt automatisch toegepast bij het afrekenen.",
            	coupon_learn_more: "<a href=\"https://support.steampowered.com/kb_article.php?ref=4210-YIPC-0275\">Kom meer te weten</a> over Steam-coupons",
            	add_to_cart: "Aan winkelwagen toevoegen",
            	drm_third_party: "Waarschuwing: Dit programma maakt gebruik van DRM van derden",
            	empty_cart: "Winkelwagen leegmaken",
            	events_view_all: "ALLES BEKIJKEN",
            	events: "Evenementen",
            	dlc_data_header: "Details over downloadbare inhoud",
            	tag_owned: "In je bezit",
            	tag_wishlist: "Verlanglijst",
            	tag_coupon: "Waardebon",
            	tag_inv_gift: "Geschenk",
            	tag_inv_guestpass: "Gastenpas",
            	tag_friends_want: "<a href=\"http://steamcommunity.com/my/friendsthatplay/__appid__\">__friendcount__ willen dit</a>"
        	},
        "pt-br":{
		empty_wishlist: "Limpar Lista de Desejos",
    		purchase_date: "(Comprado __date__)",
        	options: "Opções",
        	website: "Página Web",
        	contribute: "Contribua (GitHub)",
        	store: "Loja",
        	library_menu: "Biblioteca",
        	community: "Comunidade",
        	news: "News",
        	about: "Sobre",
        	donate: "Doação",
        	language: "Idioma",
        	highlight: "Realçar",
        	options_owned: "Seus Itens",
        	options_wishlist: "Itens em sua Lista de Desejos",
        	options_coupon: "Itens com Cupons",
        	options_gift: "Itens armazenados como Presente",
        	options_guest: "Itens que você possui Convite",
        	options_friends_wishlist: "Itens desejados por seus Amigos",
        	options_hide_install: "Ocultar botão \"Instalar o Steam\" no topo",
        	options_drm: "Mostrar Avisos sobre DRM de terceiros",
        	options_lowestprice: "Mostrar Histórico de Preços",
        	options_metacritic: "Mostrar Pontuação dos Usuários no Metacritic",
        	options_steamdb: "Mostrar links do SteamDB",
        	options_wsgf: "Mostrar Informações de WSGF (Widescreen)",
        	options_carousel_description: "Mostrar descrições no Carrossel do Frente de Loja",
        	options_profile_links: "Mostrar links no perfil para",
		options_total_spent: "Mostrar \"Total Gasto\" no Detalhes da Conta",
		options_group_events: "Mostrar Eventos na Visualização do Grupo",
		options_greenlight_banner: "Reposicionar Steam Greenlight Banner",
		options_steamcardexchange: "Mostrar links do SteamCardExchange nas insígnias",
		options_es_bg: "Selecionar Papel de Parede Personalizável no Editar perfil",
		options_library: "Mostrar botão Biblioteca no topo (BETA)",
		options_library_f2p: "Mostrar jogos gratuitos para jogar (free to play) e demos jogadas na biblioteca",
		options_hide_about: "Ocultar botão Sobre no topo",
		options_about_text: "Sobre <a href='http://www.enhancedsteam.com' style='color:#8bc53f;'>Enhanced Steam</a>:<p>Enhanced Steam é uma extensão para Google Chrome que adiciona novos recursos na página do Steam.<p>Recursos incluem:<ul><li>Realce para jogos já comprados</li><li>Realce para jogos na Lista de Desejos</li><li>Cálculo correto de desconto em pacotes baseado em jogos já comprados</li><li>Mostrar quanto foi total gasto no Steam na vida de sua conta</li><li>Realça DLC já comprados na página do jogo</li><li>Corrige \"No Image Available\" em icones de jogos na Lista de Desejos de qualquer jogo ou DLC</li><li>Apresenta jogos com DRM de terceiros</li></ul><p>Se achou esta extensão útil, por favor considere uma doação.",
		tag: "Marca",
		theworddefault: "Padrão",
		save: "Salvar",
		saved: "Salvo",
		view_in: "Ver em",
		clear_cache: "Limpar dados no cache",
        	forums: "Fóruns",
        	coupon_available: "Você tem um cupom disponível!",
        	coupon_application_note: "Um cupom em seu inventário será aplicado automaticamente no momento de pagar.",
        	coupon_learn_more: "<a href=\"https://support.steampowered.com/kb_article.php?ref=4210-YIPC-0275\">Aprenda mais</a> sobre Cupons Steam",
        	add_to_cart: "Adicionar ao Carrinho",
			add_unowned_dlc_to_cart: "Adicionar DLC não adquiridos ao Carrinho",
        	drm_third_party: "Aviso: Este jogo possui DRM de terceiros",
        	empty_cart: "Limpar Carrinho",
        	events_view_all: "VER TODOS",
        	events: "Eventos",
        	dlc_data_header: "Detalhes do Conteúdo Baixável",
        	tag_owned: "Adquirido",
        	tag_wishlist: "Lista de Desejos",
        	tag_coupon: "Cupom",
        	tag_inv_gift: "Presente",
        	tag_inv_guestpass: "Convite",
        	tag_friends_want: "<a href=\"http://steamcommunity.com/my/friendsthatplay/__appid__\"> desejado por __friendcount__ amigos</a>",
        	inventory_market_text: "Mostrar Preço de Mercado no Inventário (Experimental!)",
		credits: "Créditos",
		stores: "Lojas",
		all: "Todas",
		programming: "Desenvolvimento",
		translation: "Tradução",
		custom_background: "Papel de Parede Personalizado",
		custom_background_help: "Todos os usuários do Enhanced Steam verão este papel de parede no seu perfil. Outros usuários verão papel de parede normal do perfil.",
		total_size: "Tamanho Total",
		hide: "Ocultar",
		store_transactions: "Transações da Loja",
		game_transactions: "Transações de Jogos",
		market_transactions: "Transações no Mercado",
		total_spent: "Total Gasto",
		historical_low: "Menor Registrado",
		lowest_price: "Menor Preço",
		card_drops_remaining: "__drops__ queda de cartas restante.",
		library: {
			private_profile: "Mude seu status de perfil para público <a href='http://steamcommunity.com/my/edit/settings'>nas configurações</a> para usar este recurso."
		}
        },
        "ru":   {
		empty_wishlist: "Очистить список желаемого",
		purchase_date: "(Куплено __date__)",
		options: "Опции",
		website: "Веб-сайт",
		contribute: "Внести вклад (GitHub)",
		store: "Магазин",
		community: "Сообщество",
		news: "Новости",
		about: "О расширении",
		donate: "Пожертвовать",
		language: "Язык",
		highlight: "Подсвечивать",
		options_owned: "Продукты, которые уже у вас есть",
		options_wishlist: "Продукты, которые находятся в вашем списке желаемого",
		options_coupon: "Продукты, которые могут быть использованы с имеющимися купонами",
		options_gift: "Продукты, которые находятся в вашем инвентаре",
		options_guest: "Продукты, для которых у вас есть гостевой пропуск",
		options_friends_wishlist: "Продукты, которые находятся в списке желаемого ваших друзей",
		options_hide_install: "Спрятать кнопку «Установить Steam» в шапке",
		options_drm: "Отображать предупреждения о DRM-технологиях сторонних разработчиков (GFWL, Uplay и т.д.)",
		options_lowestprice: "Отображать информацию о ценовой истории",
		options_metacritic: "Отображать рейтинг Metacritic от пользователей",
		options_steamdb: "Отображать ссылки SteamDB",
		options_wsgf: "Отображать информацию о поддержке широкоэкранных мониторов (WSGF)",
		options_carousel_description: "Отображать описания на главной странице магазина Steam",
		options_profile_links: "Отображать ссылки в профиле на:",
		options_total_spent: "Отображать «Всего потрачено» на странице аккаунта",
		options_group_events: "Отображать события в просмотре групп",
		options_greenlight_banner: "Заменить баннер Steam Greenlight",
		options_es_bg: "Выбрать фон профиля или редактировать экран профиля",
		options_library: "Отображать кнопку «Библиотека» в шапке (БЕТА)",
		options_hide_about: "Спрятать кнопку «О Steam» в шапке",
		options_about_text: "О расширении «<a href=http://www.EnhancedSteam.com style='color:#8bc53f;'>Enhanced Steam</a>»:<p>«Enhanced Steam» — это расширение для Google Chrome и дополнение для Mozilla Firefox, которое добавляет полезные особенности на сайт Steam.<p>Особенности включают:<ul><li>Подсвечивание игр, которые уже у вас есть<li>Подсвечивание игр, которые имеются в вашем списке желаемого<li>Правильный подсчет скидок наборов, основанных на играх, которые у вас есть<li>Отображение суммы денег, которое вы потратили за время существования вашего аккаунта<li>Подсвечивание дополнений, которые у вас есть, на странице игр<li>Исправление картинки «No Image Available», которая иногда отображается для игр и дополнений<li>Предупреждение об использовании игр дополнительных клиентов и защиты (GFWL, Uplay и т.д.)</ul><p>Если вы считаете, что плагин очень хорош, то пожертвуйте любую сумму.",
		tag: "Отмечать",
		theworddefault: "По умолчанию",
		save: "Сохранить",
		saved: "Сохранено",
		view_in: "Просмотреть в",
		clear_cache: "Очистить кэшированную информацию",
		forums: "Форумы",
		coupon_available: "У вас есть купон!",
		coupon_application_note: "При покупке купон будет использован автоматически.",
		coupon_learn_more: "<a href=\"https://support.steampowered.com/kb_article.php?ref=4210-YIPC-0275\">Узнать больше о</a> купонах Steam",
		add_to_cart: "Добавить в корзину",
		drm_third_party: "Внимание: эта игра использует DRM-технологию сторонних поставщиков",
		empty_cart: "Очистить корзину",
		events_view_all: "ПОКАЗАТЬ ВСЕ",
		events: "События",
		dlc_data_header: "Детали дополнений",
		tag_owned: "Приобретено",
		tag_wishlist: "Список желаемого",
		tag_coupon: "Купон",
		tag_inv_gift: "Подарок",
		tag_inv_guestpass: "Гостевой пропуск",
		tag_friends_want: "<a href=\"http://steamcommunity.com/my/friendsthatplay/__appid__\">Ваши друзья (__friendcount__) хотят это</a>",
		inventory_market_text: "Отображать цену Торговой площадки на странице инвентаря (Экспериментальное!)",
		credits: "Авторы",
		stores: "Магазины",
		all: "Все",
		programming: "Программирование",
		translation: "Перевод",
		custom_background: "Пользовательский фон профиля",
		custom_background_help: "Все пользователи Enhanced Steam будут видеть выбранный фон в вашем профиле. Пользователи, у которых не установлен Enhanced Steam, будут видеть выбранный вами фон выше."
		}
    };

    // Set english defaults.
    $.each(localized_strings, function(lang, strings){
        $.each(localized_strings_default, function(key, val){
            if (!strings[key]) strings[key] = val;
        });
    });
    setTimeout(deferred.resolve, 250); // Delay ever so slightly to make sure all loc is loaded.
    return deferred.promise();
})();
