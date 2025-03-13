'use client';

import { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';
import { WhatsappLogo as PhosphorWhatsappLogo } from '@phosphor-icons/react';

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
