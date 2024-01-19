/** @format */
import React from 'react';
import { cx } from '../utils/index';

export const FacebookIcon = ({ className, ...rest }) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={24}
		height={24}
		fill="none"
		viewBox="0 0 24 24"
		{...rest}
		className={cx('w-full h-full', className)}
	>
		<path
			fill="#fff"
			fillRule="evenodd"
			d="M0 12.067C0 18.033 4.333 22.994 10 24v-8.667H7V12h3V9.333c0-3 1.933-4.666 4.667-4.666.866 0 1.8.133 2.666.266V8H15.8c-1.467 0-1.8.733-1.8 1.667V12h3.2l-.533 3.333H14V24c5.667-1.006 10-5.966 10-11.933C24 5.43 18.6 0 12 0S0 5.43 0 12.067Z"
			clipRule="evenodd"
		/>
	</svg>
);

export const InstagramIcon = ({ className, ...rest }) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={32}
		height={32}
		viewBox="0 0 32 32"
		{...rest}
		className={cx('w-full h-full', className)}
	>
		<g
			fill="none"
			fillRule="evenodd"
		>
			<path d="M0 0h32v32H0z" />
			<path
				fill="#fff"
				fillRule="nonzero"
				d="M17.083.033c8.12 0 14.762 6.643 14.762 14.762V17.1c0 8.12-6.643 14.762-14.762 14.762h-2.306C6.657 31.863.015 25.22.015 17.101v-2.306C.015 6.675 6.658.033 14.777.033zm-.863 8h-.205c-1.71 0-3.42.056-3.42.056a4.523 4.523 0 0 0-4.524 4.523s-.052 1.469-.056 3.045v.206c0 1.765.056 3.59.056 3.59a4.523 4.523 0 0 0 4.523 4.523s1.6.057 3.251.057c1.765 0 3.647-.057 3.647-.057a4.427 4.427 0 0 0 4.466-4.466s.057-1.805.057-3.534l-.001-.405c-.008-1.552-.056-3.015-.056-3.015a4.427 4.427 0 0 0-4.466-4.467s-1.629-.052-3.272-.056zm-.205 1.44c1.402 0 3.2.046 3.2.046 2.049 0 3.313 1.265 3.313 3.313 0 0 .047 1.768.047 3.154 0 1.418-.047 3.247-.047 3.247 0 2.049-1.264 3.313-3.313 3.313 0 0-1.59.04-2.97.046h-.37c-1.354 0-3.004-.046-3.004-.046-2.049 0-3.37-1.321-3.37-3.37 0 0-.046-1.835-.046-3.282 0-1.355.046-3.062.046-3.062 0-2.048 1.321-3.313 3.37-3.313 0 0 1.741-.046 3.144-.046zm0 2.462a4.098 4.098 0 1 0 0 8.196 4.098 4.098 0 0 0 0-8.196zm0 1.431a2.667 2.667 0 1 1 0 5.333 2.667 2.667 0 0 1 0-5.333zm4.294-2.569a.993.993 0 0 0-.99.996c0 .55.443.995.99.995.547 0 .99-.446.99-.995a.993.993 0 0 0-.99-.996z"
			/>
		</g>
	</svg>
);

export const LinkedinIcon = ({ className, ...rest }) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={16}
		height={16}
		fill="none"
		viewBox="0 0 16 16"
		{...rest}
		className={cx('w-full h-full', className)}
	>
		<path
			fill="#fff"
			d="M12.225 12.225h-1.778V9.44c0-.664-.012-1.519-.925-1.519-.926 0-1.068.724-1.068 1.47v2.834H6.676V6.498h1.707v.783h.024c.348-.594.996-.95 1.684-.925 1.802 0 2.135 1.185 2.135 2.728l-.001 3.14zM4.67 5.715a1.037 1.037 0 0 1-1.032-1.031c0-.566.466-1.032 1.032-1.032.566 0 1.031.466 1.032 1.032 0 .566-.466 1.032-1.032 1.032zm.889 6.51h-1.78V6.498h1.78v5.727zM13.11 2H2.885A.88.88 0 0 0 2 2.866v10.268a.88.88 0 0 0 .885.866h10.226a.882.882 0 0 0 .889-.866V2.865a.88.88 0 0 0-.889-.864z"
		/>
	</svg>
);

export const TiktokIcon = ({ className, ...rest }) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={24}
		height={24}
		fill="none"
		viewBox="0 0 24 24"
		{...rest}
		className={cx('w-full h-full', className)}
	>
		<path
			fill="#fff"
			d="M16.822 5.134A4.75 4.75 0 0 1 15.648 2h-.919a4.763 4.763 0 0 0 2.093 3.134ZM8.322 11.905a2.89 2.89 0 0 0-2.886 2.888c0 1.11.63 2.076 1.55 2.559a2.859 2.859 0 0 1-.548-1.686 2.89 2.89 0 0 1 2.886-2.888c.297 0 .585.05.854.134v-3.51a6.419 6.419 0 0 0-.854-.06c-.051 0-.097.004-.149.004v2.693a2.905 2.905 0 0 0-.853-.134Z"
		/>
		<path
			fill="#fff"
			d="M19.424 6.676v2.67a8.172 8.172 0 0 1-4.778-1.537v6.989c0 3.487-2.835 6.329-6.324 6.329a6.296 6.296 0 0 1-3.624-1.147A6.312 6.312 0 0 0 9.324 22c3.484 0 6.324-2.837 6.324-6.33V8.683a8.172 8.172 0 0 0 4.779 1.537V6.783a4.7 4.7 0 0 1-1.003-.107Z"
		/>
		<path
			fill="#fff"
			d="M14.646 14.798V7.809a8.172 8.172 0 0 0 4.778 1.537v-2.67a4.773 4.773 0 0 1-2.602-1.542A4.802 4.802 0 0 1 14.725 2H12.21l-.005 13.777a2.89 2.89 0 0 1-2.881 2.782 2.898 2.898 0 0 1-2.343-1.203 2.899 2.899 0 0 1-1.55-2.558 2.89 2.89 0 0 1 2.886-2.889c.297 0 .585.051.854.135V9.351C5.756 9.425 3 12.23 3 15.67a6.31 6.31 0 0 0 1.698 4.309 6.296 6.296 0 0 0 3.624 1.147c3.484 0 6.324-2.842 6.324-6.33Z"
		/>
	</svg>
);
