<? /* Template Name: Full Width Page */

get_header();
if (have_posts()) : while (have_posts()) : the_post(); ?>

<div class="content">
	<!-- use three levels of hierarchy -->
	<?=the_content(); ?>
</div>

<?php endwhile; endif;
get_footer(); ?>
