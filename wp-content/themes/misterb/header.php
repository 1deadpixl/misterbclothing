<!doctype html>

<!--[if lt IE 7]><html <?php language_attributes(); ?> class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if (IE 7)&!(IEMobile)]><html <?php language_attributes(); ?> class="no-js lt-ie9 lt-ie8"><![endif]-->
<!--[if (IE 8)&!(IEMobile)]><html <?php language_attributes(); ?> class="no-js lt-ie9"><![endif]-->
<!--[if gt IE 8]><!--> <html <?php language_attributes(); ?> class="no-js"><!--<![endif]-->

	<head>
		<meta charset="utf-8">

		<?php // Google Chrome Frame for IE ?>
		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">

		<title><?php echo get_bloginfo('name').wp_title(' : ',false);  ?></title>

		<?php // mobile meta (hooray!) ?>
		<meta name="HandheldFriendly" content="True">
		<meta name="MobileOptimized" content="320">
		<meta name="viewport" content="width=device-width, initial-scale=1.0"/>

		<link rel="apple-touch-icon" href="<?=FILES?>/images/apple-icon-touch.png">
		<link rel="icon" href="<?=FILES?>/images/favicon.png">
		<!--[if IE]>
			<link rel="shortcut icon" href="<?=FILES?>/images/favicon.ico">
		<![endif]-->
		<?php // or, set /favicon.ico for IE10 win ?>
		<meta name="msapplication-TileColor" content="#212121">
		<meta name="msapplication-TileImage" content="<?=FILES?>/images/win8-tile-icon.png">

		<link rel="pingback" href="<?php bloginfo('pingback_url'); ?>">

		<?php // wordpress head functions ?>
		<?php wp_head(); ?>
		<?php // end of wordpress head ?>

		<?php // drop Google Analytics Here ?>
		<?php // end analytics ?>

	</head>

	<body <?php body_class(); ?>>
			<header role="banner">
				<div id="header-top">
					<a id="logo" href="<?php echo home_url(); ?>" rel="nofollow" title="<?php bloginfo('name'); ?>"><img src="<?=FILES?>/images/logo.png" alt="<?php bloginfo('name'); ?>" width="171" height="50"></a>
					<nav role="navigation">
						<?php bones_main_nav(); ?>
					</nav>
				</div>
				
			</header>
			<div id="brands-pager">
				<?php
				foreach(get_posts(array('post_type'=>'brand','orderby'=>'title','order'=>'ASC','posts_per_page'=>-1)) as $index=>$brand) {
					echo '<a data-slide-index="'.$index.'" href="'.get_permalink($brand->ID).'" title="'.$brand->post_title.'">';
					echo get_the_post_thumbnail($brand->ID,'full', array('alt'=>$brand->post_title));
					echo '</a>';
				}
				?>
			</div>
<?php // end header ?>
