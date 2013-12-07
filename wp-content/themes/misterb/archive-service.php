<?

get_header();
query_posts(array('post_type'=>get_query_var('post_type'),'orderby'=>'menu_order','order'=>'ASC','posts_per_page'=>-1));
if (have_posts()) : while (have_posts()) : the_post(); ?>

<div class="content">
	<!-- use three levels of hierarchy -->
	<h1><?=the_title(); ?></h1>
	<? the_post_thumbnail('full'); ?>
	<?=the_content(); ?>
</div>

<?php endwhile; endif;
get_footer(); ?>
