<?php get_header(); ?>

<div class="content">
	<h1>Print Editorials</h1>
	<div class="section" id="print_editorials">
	<?php
		$attachments = new Attachments('press_editorials', get_post(get_page_by_title('media'))->ID);
		while( $attachment = $attachments->get() ) :
	?>
		<div>
			<? $id = $attachment->id; ?>
			<a href="<?=wp_get_attachment_url($id)?>" rel="print_editorials" title="<?=$attachment->fields->title;?>">
				<?=wp_get_attachment_image($id,'press-thumb');?>
			</a>
			<p class="title"><?=$attachment->fields->title;?></p>
			<p class="publication"><?=$attachment->fields->publication;?></p>
			<p class="date"><?=$attachment->fields->date ? $attachment->fields->date : "&nbsp;";?></p>
		</div>
	<?php endwhile; ?>
	</div>
	<h1>Print Ads</h1>
	<div class="section" id="print_adverts">
	<?php
		$attachments = new Attachments('press_ads', get_post(get_page_by_title('media'))->ID);
		while( $attachment = $attachments->get() ) :
	?>
		<div>
			<? $id = $attachment->id; ?>
			<a href="<?=wp_get_attachment_url($id)?>" rel="print_ads" <?=$attachment->fields->date ? 'title="'.$attachment->fields->date.'"' : "";?>>
				<?=wp_get_attachment_image($id,'press-thumb');?>
			</a>
			<p class="publication"><?=$attachment->fields->publication ? $attachment->fields->publication : "&nbsp;"; ?></p>
			<p class="date"><?=$attachment->fields->date ? $attachment->fields->date : "&nbsp;";?></p>
		</div>
	<?php endwhile; ?>
	</div>
</div>

<?php get_footer(); ?> 