<?php get_header(); ?>

<div class="content">
	<?php
		query_posts(array('post_type'=>get_query_var('post_type'),'orderby'=>'menu_order','order'=>'ASC','posts_per_page'=>-1));
		if (have_posts()) : while (have_posts()) : the_post();
	?>
	<div class="event">
		<h1><? the_title(); ?></h1>
		<div class="date"><?= strtoupper(get_the_date('D')); ?><br><?= get_the_date('n'); ?></div>
		<div class="time"><?= get_the_time('g:ia'); ?></div>
		<div class="venue"><?= get_field('venue',1)[1]; ?></div>
		<p><?php echo the_content(); ?></p>
	</div>
	<?php endwhile; endif; ?>
</div>

<?php get_footer(); ?>