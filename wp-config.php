<?php
/**
 * The base configurations of the WordPress.
 *
 * This file has the following configurations: MySQL settings, Table Prefix,
 * Secret Keys, WordPress Language, and ABSPATH. You can find more information
 * by visiting {@link http://codex.wordpress.org/Editing_wp-config.php Editing
 * wp-config.php} Codex page. You can get the MySQL settings from your web host.
 *
 * This file is used by the wp-config.php creation script during the
 * installation. You don't have to use the web site, you can just copy this file
 * to "wp-config.php" and fill in the values.
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'wp_misterb');

/** MySQL database username */
define('DB_USER', 'wp_misterb');

/** MySQL database password */
define('DB_PASSWORD', 'hNQKc4qKv7Q64Dz9');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '%.s+vq-Npe-|tjp#_RCG<kcKh]0}[-W4UvMPT<l!O-Np^U&a ?#yjzQzVn<R@JFK');
define('SECURE_AUTH_KEY',  'iwC+{G0SugW7qjttF9]RN`Ot(=sZ)*0!3m]S`Gem9t.M.FEIhL9Wf:n-JmU{<~mZ');
define('LOGGED_IN_KEY',    'tG}:;x@]p<+:Bl|kuK-|?H=+HRZr-9E+!22CN|q#iu:bMEPHCODE&cyc[!K3}9NI');
define('NONCE_KEY',        'M-~-Jh|jz@S=/VXCY*F-lbL!CLckZ-+]rYViG#%*{w<l=P15Kv^T<>y5Q-m|Tio/');
define('AUTH_SALT',        'Xeguq%Y_G%oQHM:GG#w.aU}*B]R.U`S[9@/<v;!wQkaqprK1TrL:-6)K]g<wAJc,');
define('SECURE_AUTH_SALT', 'Uv*#QBG~rJROS_yVQJDi(Mc[ q)H^OheG4Jnsf=UWpE<K0=VG:;q1kj UO-7R0GV');
define('LOGGED_IN_SALT',   '7v5)nqf_s^y1q^3J%%|t;h?YvglOodo6l*-8B aHvlLRmO^AOl+OE/m%-<{r?3yS');
define('NONCE_SALT',       'HMoJRr$B%2E9?M]c))z,|[P-S;(hrK>=Rv@bnp)j>x) 6IX^-GG<#j|%+atJXzx4');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each a unique
 * prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * WordPress Localized Language, defaults to English.
 *
 * Change this to localize WordPress. A corresponding MO file for the chosen
 * language must be installed to wp-content/languages. For example, install
 * de_DE.mo to wp-content/languages and set WPLANG to 'de_DE' to enable German
 * language support.
 */
define('WPLANG', '');

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 */
define('WP_DEBUG', false);

//Disable Attachments plugin settings screen. It's for info purposes only.
define( 'ATTACHMENTS_SETTINGS_SCREEN', false );
//Disbale Attachmetns plugin defaul instance. Custom instances are defined in the theme's functions.php
define( 'ATTACHMENTS_DEFAULT_INSTANCE', false );

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
