<?php get_header(); ?>

<div class="content">
	<?php
		query_posts(array('post_type'=>get_query_var('post_type'),'orderby'=>'date','order'=>'DESC','posts_per_page'=>-1,'post_status'=>'any'));
		if (have_posts()) : while (have_posts()) : the_post();
		$prev_post_month = $this_post_month;
		$this_post_month = get_the_date('n');
		if ($this_post_month != $prev_post_month) :
	?>
	<h1 class="month"><?= get_the_date('F Y'); ?></h1>
	<? endif; ?>
	<div class="event">
		<h1><? the_title(); ?></h1>
		<div class="date"><?= strtoupper(get_the_date('D')); ?><br><?= get_the_date('j'); ?></div>
		<div class="venue"><?= get_field('venue',1)[1]; ?></div>
		<div class="time"><?
			echo get_the_time('g:ia');
			if (get_field('endtime',1))	echo " to " . get_field('endtime',1)[1];
		?></div>
		<p><?php echo the_content(); ?></p>
	</div>
	<?php endwhile; endif; ?>
</div>

<?php get_footer(); ?>