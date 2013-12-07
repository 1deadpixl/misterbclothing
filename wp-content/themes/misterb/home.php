<?php 
get_header();
?>

<div class="content">
<?php if (have_posts()) : while (have_posts()) : the_post(); ?>
	<div class="post_excerpt">
		<h1><a href="<? the_permalink(); ?>"><? the_title(); ?></a></h1>
		<? the_excerpt(); ?>
	</div>
<?php endwhile; endif; ?>
</div>
<?php get_footer(); ?>