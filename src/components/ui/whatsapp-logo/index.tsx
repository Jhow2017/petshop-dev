'use client';

import { WhatsappLogo as PhosphorWhatsappLogo } from '@phosphor-icons/react';
import { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

interface WhatsappLogoProps
    extends ComponentProps<typeof PhosphorWhatsappLogo> {
    className?: string;
}

export function WhatsappLogo({ className, ...props }: WhatsappLogoProps) {
    return (
        <PhosphorWhatsappLogo
            className={twMerge('w-5 h-5', className)}
            {...props}
        />
    );
}
