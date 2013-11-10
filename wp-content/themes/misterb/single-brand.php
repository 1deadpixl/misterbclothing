<?php get_header();
if (have_posts()) : while (have_posts()) : the_post(); ?>

<div class="content">
	<div id="brand-details">
		<?=get_image('logo',1,1,1,NULL,NULL,array('id'=>'brand-logo')); ?>
		<? $url = get('website'); if ($url) echo '<a id="brand-url" href="http://'.get('website').'" target="_blank">'.get('website').'</a>'; ?>
		<? $loc = get('location'); if ($loc) echo '<p id="brand-location">'.get('location').'</p>' ?>
		<p id="brand-description"><?=get_the_content(); ?></p>
	</div>
	<?
		$image = get_image('detail_image',1,1,1,NULL,NULL,array('id'=>'brand-detail'));
		if ($image) { echo $image; }
		else { echo get_image('slideshow',1,1,1,NULL,NULL,array('id'=>'brand-detail')); }
	?>
	<!-- TODO: List articles that have the brand as a tag -->
</div>

<?php endwhile; endif;
get_footer(); ?>