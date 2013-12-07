<?php get_header(); ?>

<div class="content">
	<h1><?=get_post(get_page_by_title('media'))->ID?></h1>
	<?php
		$attachments = new Attachments('press_ads', get_post(get_page_by_title('media'))->ID);
		while( $attachment = $attachments->get() ) :
	?>
	<!-- <div class="section" id="print_ads"> -->
		<p><? echo '<pre>'.print_r($attachment,true).'</pre>'; ?></p>
	<!-- </div> -->
<?php endwhile; ?>
</div>

<?php get_footer(); ?> 